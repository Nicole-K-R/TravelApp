var express = require('express');
var path = require('path');
var app = express();



//***** Express Routing *****//
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static('public'));

// Get request for root route
app.get('/', function (req, res) {
    res.send('hello world');
})

// Example get request with variable
app.get('/test/:var', function (req, res) {
    console.log(req.params.var);
    res.send('You are on the ' + req.params.var +  ' page');
})

// Example post request
app.post('/test', function (req, res) {
    res.send('You are on test page');
})

// Listen to port 7000
app.listen(7000, function(){
    console.log('Example app listening on port 7000!');
});

// // GET method route
// app.get('/', function (req, res) {
//     res.send('GET request to the homepage')
// })

// // POST method route
// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
// })



