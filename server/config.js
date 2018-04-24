const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes");
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/../client/dist"));

app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})

module.exports = app;
