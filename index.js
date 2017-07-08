const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://jlowell@localhost/sandbox";

const app = express();

const port = 3000;

massive(connectionString)
  .then(dbInstance => app.set('db', dbInstance));

app.use( bodyParser.json() );
app.use( cors() );

app.listen( port, () => { console.log(`Listening on port ${port}.`); } );
