$( document ).ready(function() {

  // temp dummy
  var Search = function() {
    getResults: function(srchStrng) {return "<p>These are the results</p>";}
  }
  var search = new Search();

  $('#search-string').val("");
  $('#search-string').focus();

  $('#search-btn').click(function() {
    // get results
    var results = search.getResults(('#search-string').val());
    $('#results-box').val(results);
    $('#search-string').focus();
  });

  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      // get results
      var results = search.getResults(('#search-string').val());
      $('#results-box').val(results);
      $('#search-string').focus();
    }
  }
});
