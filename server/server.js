var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(3000, (req, res)=>{
  console.log('listening on port 3000');
})