var dataParser = function(hash) {
  this.timestamp(hash);
  this.nMentions(hash);
  this.output();
  var serverBoot = require('../serverBoot');
}

  dataParser.prototype.timestamp = function (hash) {
    var keys = Object.keys(hash);
    this.timeS = keys[keys.length -1 ];
  };

  dataParser.prototype.nMentions = function (hash) {
    var results = Object.values(hash)[0];
    var number = Object.values(results);
    this.arr = number
  };

  dataParser.prototype.output = function () {
    console.log(this.timeS + " Mentions: " + this.arr)
  };

module.exports = dataParser;
