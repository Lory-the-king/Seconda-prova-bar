const prodotti = require('../../Prodotti');
const uuid = require('uuid');

class Ordine {
  constructor(identificativoCliente, orarioDiRitiro, prodottiOrdine) {
    this.id = uuid.v4();
    this.identificativoCliente = identificativoCliente;
    this.orarioDiRitiro = orarioDiRitiro;

    this.prodottiOrdine = prodottiOrdine.map(prodottoOrdine => {
      const index = prodotti.findIndex(obj => {
        return obj.id === prodottoOrdine.prodotto;
      });

      const newProdottoOrdine = {
        prodotto: {
          id: prodotti[index].id,
          tipoProdotto: prodotti[index].tipoProdotto,
          nomeProdotto: prodotti[index].nomeProdotto,
          descrizione: prodotti[index].descrizione,
          prezzo: prodotti[index].prezzo,
        },
        quantità: prodottoOrdine.quantità,
      };
      return newProdottoOrdine;
    });
    this.totaleDaPagare = this.calcolaTotaleDaPagare(this.prodottiOrdine);
    this.stato = 'DA-PREPARARE';
  }

  calcolaTotaleDaPagare(prodotti) {
    let nuovoTotale = 0;
    prodotti.forEach(prodottoOrdine => {
      nuovoTotale += prodottoOrdine.quantità * prodottoOrdine.prodotto.prezzo;
    });
    return nuovoTotale;
  }

  updateStato() {
    switch (this.stato) {
      case 'DA-PREPARARE':
        this.stato = 'PREPARATO';
        break;
      case 'PREPARATO':
        this.stato = 'CONSEGNATO';
        break;
    }
  }
}

module.exports = Ordine;
