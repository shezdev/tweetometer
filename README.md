# tweetometer

[![Stories in Ready](https://badge.waffle.io/shezdev/tweetometer.png?label=ready&title=Ready)](https://waffle.io/shezdev/tweetometer)

## Process ##

0. Put `index.html` in the same dir as `tweetometer.js`. `tweetometer.js` holds our code for communicating with the Twitter API and code to start a server using node's `http` package.

1. Run `$ node tweetomoeter.js`. This starts the server.

2. Open `localhost:8080/index.html` in a browser.
This loads our front end code into a browser

3. The user enters a search string.

4. This sends an AJAX request to our node server.

5. The node server gets data via the Twitter API and returns it to the browser.

6. As soon as the browser gets the data it displays it and makes a repeat request to the node server.

7. The previous three steps repeat until the user presses stop or closes the browser.

## Issues

1. Getting the node server to generate the index.html reliably.

2. Getting the node server to accept AJAX requests. The client side code is straightforward.

To better achieve both of thiese, it may have been better to use `Express` for the server, but there is now limited time.
