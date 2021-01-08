const express = require('express');
const router = express.Router();
// const dbQueries = require('../../models/RamProdottiQueries');  --> lettura da RAM
const dbQueries = require('../../models/dbProdottiQueries');

// Restituisce tutti i prodotti
router.get('/', dbQueries.getProdotti);

// Restituisce i prodotti con id specificato
router.get('/:id', dbQueries.getProdottoOnId);

// Aggiunta di un nuovo prodotto
router.post('/', dbQueries.addNewProdotto);

// Aggiornamento dei dati riguardo a un prodotto specifico
// router.put('/:id', dbQueries.updateProdottoOnId); --> commentate per motivi di sicurezza, vedi /app/models/dbProdottiQueries.js

// Eliminazione di un prodotto
// router.delete('/:id', dbQueries.deleteProdottoOnId); --> commentate per motivi di sicurezza, vedi /app/models/dbProdottiQueries.js

module.exports = router;
