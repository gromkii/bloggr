var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  api = require('./routes/api'),
  userRoutes = require('./routes/users'),
  postRoutes = require('./routes/posts'),
  commentRoutes = require('./routes/comments')
  cors = require('cors'),
  port = process.env.PORT || 3000;

app.use(express.static('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(cors())
  .use(methodOverride('_method'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  next();
})

app.use('/api', api);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
  console.log('Server is listening.');
  console.log(process.env.DB_ENV);
})

module.exports = app;
