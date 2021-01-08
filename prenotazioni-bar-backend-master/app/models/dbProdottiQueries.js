const pool = require('../config/db.config');
const uuid = require('uuid');

const getProdotti = (req, res) => {
  pool.query(`SELECT * FROM prodotti`, (error, result) => {
    if (error) {
      throw error;
    }

    res.json(result.rows);
  });
};
// getProdotti();

const getProdottoOnId = (req, res) => {
  pool.query(
    `SELECT * FROM prodotti WHERE id = $1`,
    [req.params.id],
    (error, result) => {
      if (error) {
        throw error;
      }

      if (result.rowCount >= 1) {
        res.json(result.rows);
      } else {
        res
          .status(400)
          .json({ msg: `Nessun prodotto con id=${req.params.id}` });
      }
    }
  );
};
// getProdottoOnId({ params: { id: '4cb43de1-767a-43fb-8882-81fa4a3d1a5a' } });

const addNewProdotto = (req, res) => {
  if (
    !req.body.tipoProdotto ||
    !req.body.nomeProdotto ||
    !req.body.descrizione ||
    !req.body.prezzo
  ) {
    return res
      .status(400)
      .json({ msg: 'Assicurati di aver compilato tutti i campi' });
  }

  const newProdotto = [
    uuid.v4(),
    req.body.tipoProdotto,
    req.body.nomeProdotto,
    req.body.descrizione,
    req.body.prezzo,
  ];

  pool.query(
    `INSERT INTO prodotti (id, tipoprodotto, nomeprodotto, descrizione, prezzo) VALUES ($1, $2, $3, $4, $5)`,
    newProdotto,
    (error, result) => {
      if (error) {
        res
          .status(400)
          .json({ msg: `Errore durante l'aggiunta del nuovo prodotto` });
        throw error;
      }
      res.json({ prodotto: result.rows });
    }
  );
};

// completeremo il resto delle query quando avremmo le web API protette
// updateProdottoOnId, deleteProdottoOnId sono le rimanenti

module.exports = {
  getProdotti,
  getProdottoOnId,
  addNewProdotto,
};
