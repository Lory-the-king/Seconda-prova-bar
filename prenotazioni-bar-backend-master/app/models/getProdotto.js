const prodotti = require('../../Prodotti');

const getProdotto = id => {
  return prodotti.filter(prodotto => {
    if (id === prodotto.id) {
      return {
        id: prodotto.id,
        tipoProdotto: prodotto.tipoprodotto,
        nomeProdotto: prodotto.nomeProdotto,
        descrizione: prodotto.descrizione,
        prezzo: prodotto.prezzo,
      };
    }
  })[0];
};

module.exports = getProdotto;
