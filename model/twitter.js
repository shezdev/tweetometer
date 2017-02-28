"use strict";

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'xjGaJNZNiw0orjqBxXVZyT387',
  consumer_secret: 'xSylmWQCarNzizPBagLbVxoJSpUEo5fI87UhSKzMTlQPtzTVd1',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAANKtzQAAAAAACeVL2WBRi0vqO9k8Dx87Xf69UGU%3DdZfyGtv0d9J9xd195pS7j4ww0os4jyvgLpwbNTDuJ5fhBSAIDM'
});

client.get('search/tweets', {q: 'eagle cat fox'}, function(error, tweets, response) {
  console.log(tweets);
});
