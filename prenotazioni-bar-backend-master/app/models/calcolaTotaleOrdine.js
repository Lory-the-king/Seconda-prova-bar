const getProdotto = require('./getProdotto');

const calcolaTotaleOrdine = (idProdotti, quantitàProdotti) => {
  let nuovoTotale = 0;
  idProdotti.forEach((idProdotto, index) => {
    nuovoTotale += quantitàProdotti[index] * getProdotto(idProdotto).prezzo;
  });
  return nuovoTotale;
};

module.exports = calcolaTotaleOrdine;
