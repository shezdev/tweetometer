$( document ).ready(function() {

  var twitMeterSearchString = "";
  var twitMeterStarted = false;
  initialiseInterface();

  function initialiseInterface() {
    $('#search-string').val("");
    $('#search-string').focus();
    $('#search-string').prop('disabled', false);
    $('#start-btn').prop('disabled', false);
    $('#stop-btn').prop('disabled', true);
    twitMeterStarted = false;
  }

  $('#start-btn').click(function(event) {
    event.preventDefault();
    getResults();
  });

  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      getResults();
    }
  });

  $('#stop-btn').click(function(event) {
    event.preventDefault();
    stopStream();
    initialiseInterface();
  });

  function getResults() {
    if (!twitMeterStarted) {
      twitMeterSearchString = $('#search-string').val();
      $('#results-list').empty();
      getTweets(twitMeterSearchString);
      twitMeterStarted = true;
      $("#search-heading").html("Seach for: " + twitMeterSearchString);
      $('#search-string').prop('disabled', true);
      $('#start-btn').prop('disabled', true);
      $('#stop-btn').prop('disabled', false);
      $('#stop-btn').focus();
    }
  }

  function updatePage(results) {
    // to do format output
    $('#results-list').append("<li>" + results + "</li>");
  }

  function stopStream() {
    $.get("http://127.0.0.1:8080/stop");
  }

  function startSearch() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          getTweets();
      }
    };
    xhttp.open("GET","http://127.0.0.1:8080/search", true) // to do add srchstrg
    xhttp.send();
  }

  function getTweets() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          updatePage(this.responseText);
          getTweets();
      }
    };
    xhttp.open("GET","http://127.0.0.1:8080/gettweets", true)
    xhttp.send();
  }

});
