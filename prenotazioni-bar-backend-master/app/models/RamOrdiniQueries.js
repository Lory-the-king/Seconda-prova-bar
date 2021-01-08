const ordini = require('../../Ordini');
const uuid = require('uuid');
const Ordine = require('./Ordine');

const getOrdini = (req, res) => res.json(ordini);

const getOrdiniOnOrarioDiRitiro = (req, res) => {
  const esiste = ordini.some(
    ordine => ordine.orarioDiRitiro === req.params.orarioDiRitiro
  );

  if (esiste) {
    res.json(
      ordini.filter(
        ordine => ordine.orarioDiRitiro === req.params.orarioDiRitiro
      )
    );
  } else {
    res.status(400).json({
      msg: `Nessun ordine per l'orario specififato: ${req.params.orarioDiRitiro}`,
    });
  }
};

const getOrdineOnId = (req, res) => {
  const esiste = ordini.some(ordine => ordine.id.toString() === req.params.id);

  if (esiste) {
    res.json(ordini.filter(ordine => ordine.id.toString() === req.params.id));
  } else {
    res.status(400).json({ msg: `Nessun prodotto con id=${req.params.id}` });
  }
};

const addNewOrdine = (req, res) => {
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
  const newOrdine = new Ordine(
    req.body.identificativoCliente,
    req.body.orarioDiRitiro,
    req.body.prodottiOrdine
  );

  ordini.push(newOrdine);
  res.json(ordini);
};

const updateStatoOrdineOnId = (req, res) => {
  const esiste = ordini.some(ordine => ordine.id === parseInt(req.params.id));

  if (esiste) {
    ordini.forEach(ordine => {
      if (ordine.id.toString() === req.params.id) {
        switch (ordine.stato) {
          case 'DA-PREPARARE':
            ordine.stato = 'PREPARATO';
            break;
          case 'PREPARATO':
            ordine.stato = 'CONSEGNATO';
            break;
        }
        res.json({ msg: 'Ordine aggiornato', ordine: ordine });
        console.log('richiesta di put  ');
      }
    });
  } else {
    res.status(400).json({ msg: `Nessun prodotto con id=${req.params.id}` });
  }
};

module.exports = {
  getOrdini,
  getOrdiniOnOrarioDiRitiro,
  getOrdineOnId,
  addNewOrdine,
  updateStatoOrdineOnId,
};
