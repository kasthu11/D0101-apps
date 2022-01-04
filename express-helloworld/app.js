var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('hello world...!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 5001!');
});

