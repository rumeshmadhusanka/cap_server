const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('body-parser-xml')(bodyParser);




const capRouter = require('./routes/cap');

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.xml());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cap', capRouter);


module.exports = app;
