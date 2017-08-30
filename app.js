// app.js


// global variable and dependencies
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-Express');
const listDal = require('./dal');
const bodyParser = require('body-parser');
const open = require('./open');
const closed = require('./closed');
// const routesFile = require('./routes/routes')

//middleware

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + "/views");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// app.use('/', routesFile)


//routes - Create a resource (post); Read a resource (get); Update a resource (put); Delete a resource (Delete)

app.get('/', function(req, res){
  res.render('list', {todoList: listDal.getOpenList(), closedList: listDal.getClosedItems()});
})

app.post('/', function(req, res){
  listDal.addItem(req.body.newThing);
  res.redirect('/');
})

app.post('/:id', function(req, res){
  listDal.reactivateItem(req.body.closer);
  res.redirect('/');
})

app.post('/:id', function (req, res){
  console.log(req.params.id);
  listDal.removeItem(+req.params.id);
  res.redirect('/');
})

// app.post ('/uncheck/:id', function (req, res){
//   console.log(re.params.uncheck.id);
//   listdal.reactivateItem(+req.params.uncheck.id);
//   res.redirect('/');
// })


//assign the localhost port


app.listen(3000, function() {
  console.log("vroooooom!")
});
