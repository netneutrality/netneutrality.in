var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.redirect(307, "http://www.savetheinternet.in");
});

app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 4432);