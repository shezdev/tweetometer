var hash = { '2017-03-02T11:51:54.060Z': { trump: 20 },
 '2017-03-02T11:52:24.066Z': { trump: 32 },
 '2017-03-02T11:52:54.071Z': { trump: 35 },
 '2017-03-02T11:53:24.076Z': { trump: 35 },
 '2017-03-02T11:53:54.082Z': { trump: 43 },
 '2017-03-02T11:54:24.083Z': { trump: 43 },
 '2017-03-02T11:54:54.086Z': { trump: 45 },
 '2017-03-02T11:55:24.088Z': { trump: 79 },
 '2017-03-02T11:55:54.090Z': { trump: 39 },
 '2017-03-02T11:56:24.092Z': { trump: 31 },
 '2017-03-02T11:56:54.096Z': { trump: 46 },
 '2017-03-02T11:57:24.111Z': { trump: 41 },
 '2017-03-02T11:57:54.115Z': { trump: 50 },
 '2017-03-02T11:58:24.117Z': { trump: 49 },
 '2017-03-02T11:58:54.123Z': { trump: 51 },
 '2017-03-02T11:59:24.131Z': { trump: 45 },
 '2017-03-02T11:59:54.137Z': { trump: 53 },
 '2017-03-02T12:00:24.142Z': { trump: 53 },
 '2017-03-02T12:00:54.147Z': { trump: 6 },
 '2017-03-02T12:01:24.278Z': { trump: 0 },
 '2017-03-02T12:01:54.315Z': { trump: 0 },
 '2017-03-02T12:02:24.333Z': { trump: 0 },
 '2017-03-02T12:02:54.340Z': { trump: 0 } }

var getData = (function(){
  var timestamp = function(hash) {
    var keys = Object.keys(hash);
    // console.log(keys)
    var timeStamp = keys[keys.length -1 ]
    return timeStamp
  }

  var nMentions = function(hash){
    var array = Object.values(hash);
    var string = Object.keys(array[array.length - 1])
    console.log(hash)
    return array[array.length - 1][string]
  }

  return { timestamp:timestamp,
  nMentions:nMentions }
})();




// var dataArray = [];
// for (i=0;i<json.length;i++){dataArray.push(json[i].created_at)}
  // return {nMentions:nMentions}
// })(json);
