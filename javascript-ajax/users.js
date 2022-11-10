// Query the DOM for the '#user-list' element.
var $userList = document.querySelector('#user-list');
// Create a new XMLHttpRequest() object.
var xhr = new XMLHttpRequest();
// open() the xhr object to send a 'GET' request to 'https://jsonplaceholder.typicode.com/users'

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// Set the responseType to automatically parse the JSON response body into JavaScript objects.
xhr.responseType = 'json';
// Listen for the 'load' event on the xhr object in order to(to execute a function when the response is eventually loaded.):
// log the status of the xhr object to the console.to read the HTTP status code of the response message
// log the response of the xhr object to the console. to get the body of the HTTP response once it has been converted from a JSON string to JavaScript objects.
// loop through the response of the xhr object.
// for each user object in the response, create an < li >, set its textContent to the user's name, and append it to the '#user - list' element
xhr.addEventListener('load', function () {
  console.log('xhr.status value:', xhr.status);
  console.log('xhr.response', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $li = document.createElement('li');
    $li.textContent = xhr.response[i].name;
    $userList.appendChild($li);
  }
});
// send() the request to begin loading the data from the server.
xhr.send();
