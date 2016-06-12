var express = require('express');
var Twitter = require('twitter');
var bodyParser = require('body-parser');
var app = express();

var client = new Twitter({
  consumer_key: 'CXVNsTDohsJaIxl0cjpuLKXYr',
  consumer_secret: 'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB',
  access_token_key: '2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
  access_token_secret: 'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT',
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.disable('x-powered-by');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/tweets', function (req, res) {
  // search/tweets
  client.get('statuses/user_timeline', {}, function(error, tweets, response) {
    res.json(tweets);
  });
})

app.post('/api/tweets', function (req, res, next) {
  client.post('statuses/update', {status: req.body.text },  function(err, tweet, response){
    if(err){ next(); }

    res.json(tweet);
  });
})

app.use('/',express.static(__dirname + '/../dist'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Serving from', __dirname + '/../dist');

  console.log('Example app listening at http://%s:%s', host, port);
});
