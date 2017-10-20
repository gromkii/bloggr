var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  api = require('./routes/api'),
  port = process.env.PORT || 3000;

app.use(express.static('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'));

app.use('/api', api);

app.listen(port, () => {
  console.log('Server is listening.');
})

module.exports = app;
