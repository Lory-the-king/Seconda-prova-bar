const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'cucqxkhtykxvxi',
  host: 'ec2-54-216-202-161.eu-west-1.compute.amazonaws.com',
  database: 'd2a2tm9mu0f7pm',
  password: 'ca7e1f56bfeb96d929876574d895d3f42f196718bd131290aa38858f1c7b829d',
  port: 5432,
});

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'prenotazionibar',
//   password: 'kjmersi',
//   port: 5432,
// });

module.exports = pool;
