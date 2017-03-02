var request = require('request');

var bearer_token = new Buffer('xjGaJNZNiw0orjqBxXVZyT387:xSylmWQCarNzizPBagLbVxoJSpUEo5fI87UhSKzMTlQPtzTVd1').toString('base64');

var oauthOptions = {
  url: 'https://api.twitter.com/oauth2/token',
  headers: {'Authorization': 'Basic ' + bearer_token, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  body: 'grant_type=client_credentials'
};

request.post(oauthOptions, function(e, r, body) {
  console.log(body)
});
