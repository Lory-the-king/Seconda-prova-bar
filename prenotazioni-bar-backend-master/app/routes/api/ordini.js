const express = require('express');
const router = express.Router();
// const dbQueries = require('../../models/RamOrdiniQueries');
const dbQueries = require('../../models/dbOrdiniQueries');

// Restituisce tutti gli ordini
router.get('/', dbQueries.getOrdini);

// Restituisce un array con gli ordini con orarioDiRitoro specificato
router.get(
  '/orarioDiRitiro/:orarioDiRitiro',
  dbQueries.getOrdiniOnOrarioDiRitiro
);

// Restituisce l'ordine con id specificato
router.get('/id/:id', dbQueries.getOrdineOnId);

// Aggiunta di un nuovo ordine
router.post('/', dbQueries.addNewOrdine);

// Modifica stato ordine
router.put('/modificaStato/:id', dbQueries.updateStatoOrdineOnId);

module.exports = router;
