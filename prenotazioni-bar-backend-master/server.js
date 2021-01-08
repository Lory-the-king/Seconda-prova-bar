const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

//app.use(metodo) la funzione use ci permette di passare i nostri middleware
//I middleware sono delle funzioni che come parametri hanno (req, res, next)
//Sotto vi lascio un link di stackoverflow dove è riassunto cioè che fa
// il middleware che ho passato sulla riga 12 (bodyParser.json())
// --> https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express#:~:text=body%2Dparser%20extract%20the%20entire,submitted%20using%20HTTP%20POST%20request.
// qui è spiegato più dettagliatamente --> http://expressjs.com/en/resources/middleware/body-parser.html

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.json({ msg: 'Ciao, funzia tutto' });
// });

// Endpoint per API per i prodotti disponibili
app.use('/api/prodotti', require('./app/routes/api/prodotti'));

// Endpoint per API per le ordinazioni
app.use('/api/ordini', require('./app/routes/api/ordini'));

app.use(express.static('client/build'));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}...`);
});
