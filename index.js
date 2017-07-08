const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./products_controller')
const connectionString = "postgres://jlowell@localhost/sandbox";

const app = module.exports = express();

const port = 3000;

massive(connectionString)
  .then(dbInstance => app.set('db', dbInstance));

app.use( bodyParser.json() );
app.use( cors() );

app.post('/api/product', controller.create);
app.get('/api/product/:id', controller.getOne);
app.get('/api/products', controller.getAll);
app.put('/api/product/:id', controller.update);
app.delete('api/product/:id', controller.delete);

app.listen( port, () => { console.log(`Listening on port ${port}.`); } );
