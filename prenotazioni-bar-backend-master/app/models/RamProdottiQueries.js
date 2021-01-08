const uuid = require('uuid');
var prodotti = require('../../Prodotti');

const getProdotti = (req, res) => res.json(prodotti);

const getProdottoOnId = (req, res) => {
  // funzione some() --> https://www.w3schools.com/jsref/jsref_some.asp
  const esiste = prodotti.some(
    prodotto => prodotto.id.toString() === req.params.id
  );

  if (esiste) {
    res.json(
      prodotti.filter(prodotto => prodotto.id.toString() === req.params.id)
    );
  } else {
    res.status(400).json({ msg: `Nessun prodotto con id=${req.params.id}` });
  }
};

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

  const newProdotto = {
    id: uuid.v4(),
    tipoProdotto: req.body.tipoProdotto,
    nomeProdotto: req.body.nomeProdotto,
    descrizione: req.body.descrizione,
    prezzo: req.body.prezzo,
  };

  prodotti.push(newProdotto);
  res.json(prodotti);
};

const updateProdottoOnId = (req, res) => {
  const esiste = prodotti.some(
    prodotto => prodotto.id.toString() === req.params.id
  );

  if (esiste) {
    const prodottoAggiornato = req.body;
    prodotti.forEach(prodotto => {
      if (prodotto.id.toString() === req.params.id) {
        prodotto.tipoProdotto = prodottoAggiornato.tipoProdotto
          ? prodottoAggiornato.tipoProdotto
          : prodotto.tipoProdotto;
        prodotto.nomeProdotto = prodottoAggiornato.nomeProdotto
          ? prodottoAggiornato.nomeProdotto
          : prodotto.nomeProdotto;
        prodotto.descrizione = prodottoAggiornato.descrizione
          ? prodottoAggiornato.descrizione
          : prodotto.descrizione;
        prodotto.prezzo = prodottoAggiornato.prezzo
          ? prodottoAggiornato.prezzo
          : prodotto.prezzo;

        res.json({ msg: 'Prodotto aggiornato', prodotto });
      }
    });
  } else {
    res.status(400).json({ msg: `Nessun prodotto con id=${req.params.id}` });
  }
};

const deleteProdottoOnId = (req, res) => {
  const esiste = prodotti.some(
    prodotto => prodotto.id.toString() === req.params.id
  );

  if (esiste) {
    prodotti = prodotti.filter(
      prodotto => prodotto.id.toString() !== req.params.id
    );
    res.json({ msg: 'Prodotto eliminato', prodotti: prodotti });
  } else {
    res.status(400).json({ msg: `Nessun  prodotto con id=${req.params.id}` });
  }
};

module.exports = {
  getProdotti,
  getProdottoOnId,
  addNewProdotto,
  updateProdottoOnId,
  deleteProdottoOnId,
};
