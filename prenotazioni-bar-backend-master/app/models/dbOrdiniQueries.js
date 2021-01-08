const pool = require('../config/db.config');
const uuid = require('uuid');
const getProdotto = require('./getProdotto');
const calcolaTotaleOrdine = require('./calcolaTotaleOrdine');

const getOrdini = (req, res) => {
  pool.query(
    `SELECT * FROM ordini WHERE dataordine = $1`,
    [new Date().toISOString().slice(0, 10)],
    (error, result) => {
      if (error) {
        throw error;
      }

      const prodottiOrdine = row.idprodottiordine.map(
        (idProdottoOrdine, index) => {
          return {
            prodotto: getProdotto(idProdottoOrdine),
            quantità: row.quantitaprodottiordine[index],
          };
        }
      );

      const totaleDaPagare = calcolaTotaleOrdine(
        row.idprodottiordine,
        row.quantitaprodottiordine
      );

      const response = result.rows.map(row => {
        return {
          id: row.id,
          identificativocliente: row.identificativocliente,
          orariodiritiro: row.orariodiritiro,
          prodottiordine: prodottiOrdine,
          stato: row.stato,
          totaledapagare: totaleDaPagare,
        };
      });

      res.json(response);
    }
  );
};

const getOrdiniOnOrarioDiRitiro = (req, res) => {
  pool.query(
    `SELECT * FROM ordini WHERE orariodiritiro = $1`,
    [req.params.orarioDiRitiro],
    (error, result) => {
      if (error) {
        throw error;
      }

      if (result.rowCount >= 1) {
        res.json(result.rows);
      } else {
        res.status(400).json({
          msg: `Nessun ordine per l'orario specififato: ${req.params.orarioDiRitiro}`,
        });
      }
    }
  );
};

const getOrdineOnId = (req, res) => {
  pool.query(
    `SELECT * FROM ordini WHERE id = $1`,
    [req.params.id],
    (error, result) => {
      if (error) {
        throw error;
      }

      if (result.rowCount >= 1) {
        res.json(result.rows);
      } else {
        res.status(400).json({
          msg: `Nessun ordine per l'id specififato a: ${req.params.id}`,
        });
      }
    }
  );
};

const addNewOrdine = (req, res) => {
  const oraLimite = 9;
  if (new Date().getHours() >= oraLimite) {
    res.json({
      msg: `Le ordinazioni devono avvenire prima delle ${oraLimite}`,
    });
  } else {
    if (
      !req.body.identificativoCliente ||
      !req.body.orarioDiRitiro ||
      !req.body.prodottiOrdine
      // !(req.body.prodottiOrdine.length > 0)
    ) {
      return res.status(400).json({
        msg: `Assicurati di aver compilato tutti i campi e di avere selezionato almeno un'ordine`,
      });
    }

    // Array con gli id dei prodotto che il cliente ha ordinato
    const idprodottiordine = req.body.prodottiOrdine.map(
      prodottoOrdine => prodottoOrdine.prodotto
    );

    // Array con gli id dei prodotto che il cliente ha ordinato
    const quantitaprodottiordine = req.body.prodottiOrdine.map(
      prodottoOrdine => prodottoOrdine.quantità
    );

    const statoDefault = 'DA-PREPARARE';

    const newOrdine = [
      uuid.v4(),
      req.body.identificativoCliente,
      req.body.orarioDiRitiro,
      idprodottiordine,
      quantitaprodottiordine,
      statoDefault,
      new Date().toISOString().slice(0, 10),
    ];

    pool.query(
      `INSERT INTO ordini 
      (id, identificativocliente, orariodiritiro, idprodottiordine, quantitaprodottiordine, stato, dataordine) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      newOrdine,
      (error, result) => {
        if (error) {
          res
            .status(400)
            .json({ msg: `Errore durante l'aggiunta del nuovo ordine` });
          throw error;
        }
        res.json({ msg: `Ordine effettuato con successo` });
      }
    );
  }
};

const updateStatoOrdineOnId = (req, res) => {
  pool.query(
    `UPDATE ordini SET stato =
        CASE WHEN stato = 'DA-PREPARARE' then 'PREPARATO'
             WHEN stato = 'PREPARATO' then 'CONSEGNATO'
             ELSE 'CONSEGNATO'
        END
    WHERE id = $1`,
    [req.params.id],
    (error, result) => {
      if (error) {
        throw error;
      }

      if (result.rowCount >= 1) {
        res.json(result);
      } else {
        res.status(400).json({
          msg: `Nessun ordine per l'id specififato: ${req.params.id}`,
        });
      }
    }
  );
};

module.exports = {
  getOrdini,
  getOrdiniOnOrarioDiRitiro,
  getOrdineOnId,
  addNewOrdine,
  updateStatoOrdineOnId,
};
