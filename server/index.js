const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const port = 8080;

app.get('/api/shelf/:id', controller.getShelf);
app.get('/api/bin/:id', controller.getBin);
app.put('/api/bin/:id', controller.update);
app.delete('/api/bin/:id', controller.delete);
app.post('/api/bin/:id', controller.create);


app.listen( port, ()=> {console.log(`Server listening on port ${port}`); } );