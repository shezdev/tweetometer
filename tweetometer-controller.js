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
    // to do send message to server to stop last search: via ajax
  }

  function getTweets() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          updatePage(this.responseText);
          // to do put code in here so that when get data send request again
      }
    };
    xhttp.open("GET","http://localhost:8080/getString/" + twitMeterSearchString, true)
    xhttp.open("GET", twitMeterSearchString, true);
    xhttp.send();
  }

});
