const ordini = [
  {
    id: 1,
    identificativoCliente: 'Mersimoski Kjanija',
    orarioDiRitiro: '10:05-10:20',
    prodottiOrdine: [
      {
        prodotto: {
          id: 1,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Cotoletta',
          descrizione: 'Cotoletta di pollo ketchup',
          prezzo: 2.3,
        },
        quantità: 1,
      },
      {
        prodotto: {
          id: 2,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Cordon Blu',
          descrizione: 'Cordon Blu con insalata e formaggio',
          prezzo: 2.5,
        },
        quantità: 2,
      },
      {
        prodotto: {
          id: 3,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Hot Dog',
          descrizione: 'Wurstel e ketchup',
          prezzo: 2,
        },
        quantità: 1,
      },
    ],
    totaleDaPagare: 9.3,
    stato: 'DA-PREPARARE',
  },
  {
    id: 2,
    identificativoCliente: 'Parussin Chris',
    orarioDiRitiro: '10:05-10:20',
    prodottiOrdine: [
      {
        prodotto: {
          id: 1,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Cotoletta',
          descrizione: 'Cotoletta di pollo ketchup',
          prezzo: 2.3,
        },
        quantità: 1,
      },
      {
        prodotto: {
          id: 2,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Cordon Blu',
          descrizione: 'Cordon Blu con insalata e formaggio',
          prezzo: 2.5,
        },
        quantità: 2,
      },
      {
        prodotto: {
          id: 3,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Hot Dog',
          descrizione: 'Wurstel e ketchup',
          prezzo: 2,
        },
        quantità: 1,
      },
    ],
    totaleDaPagare: 9.3,
    stato: 'DA-PREPARARE',
  },
  {
    id: 3,
    identificativoCliente: 'Pines Emanuele',
    orarioDiRitiro: '10:25-10:40',
    prodottiOrdine: [
      {
        prodotto: {
          id: 1,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Cotoletta',
          descrizione: 'Cotoletta di pollo ketchup',
          prezzo: 2.3,
        },
        quantità: 1,
      },
      {
        prodotto: {
          id: 2,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Cordon Blu',
          descrizione: 'Cordon Blu con insalata e formaggio',
          prezzo: 2.5,
        },
        quantità: 2,
      },
      {
        prodotto: {
          id: 3,
          tipoProdotto: 'Panino',
          nomeProdotto: 'Hot Dog',
          descrizione: 'Wurstel e ketchup',
          prezzo: 2,
        },
        quantità: 1,
      },
    ],
    totaleDaPagare: 9.3,
    stato: 'DA-PREPARARE',
  },
];

module.exports = ordini;
