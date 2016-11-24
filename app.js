require('marko/node-require').install();
const express = require('express');

let app = express();

let router = require('./routes').router;
let port = 8000;

// app.use(express.compress());
app.use('/styles', express.static(__dirname + '/node_modules/normalize.css/'));
app.use('/styles', express.static(__dirname + '/node_modules/milligram/dist/'));
app.use(router);

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
})