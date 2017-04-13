var express = require('express');
var app = express();

app.use(express.static('public'));

var port = 3000;
app.listen(port, function() {
  console.log('Server is running at http://localhost:' + port);
});
