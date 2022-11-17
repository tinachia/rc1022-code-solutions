/* exported titleCase */
// define a function titleCase passing in title
// use .includes to check for :,
// split title up if ':' into an array
// call apaStyle with index of 0 and 1 as arg
// concatenate the two titles with ':'
// return result

// else call apaStyle and return result
function titleCase(title) {
  if (title.includes(':')) {
    var arr = title.split(': ');
    var title1 = apaStyle(arr[0]);
    var title2 = apaStyle(arr[1]);
    var updatedTitle = title1 + ': ' + title2;
    return updatedTitle;
  } else {
    return apaStyle(title);
  }
}

// define a function apaStyle
// lower case title and assign it to new var
// split title into words by ' ' and assign it to an arr
// create an arr of minor words
// create an empty arr
// loop th the rough the array
// if word .include in minor words and it's at index of 0, toUpperCase
// if word === javascript, word = JavaScript
// if word === API, word = API
function apaStyle(title) {
  var lowercase = title.toLowerCase();
  var arr = lowercase.split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var word;

    if (minor.includes(arr[i]) && i === 0) {
      word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    } else if (minor.includes(arr[i])) {
      word = arr[i];

    } else if (arr[i] === 'javascript') {
      word = 'JavaScript';
    } else if (arr[i] === 'api') {
      word = 'API';

    } else if (arr[i].includes('-')) {
      var hyphen = arr[i].split('-');
      var array2 = [];
      var word1 = hyphen[0].charAt(0).toUpperCase() + hyphen[0].slice(1);
      var word2 = hyphen[1].charAt(0).toUpperCase() + hyphen[1].slice(1);
      array2.push(word1);
      array2.push(word2);
      word = array2.join('-');

    } else {
      word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    newArray.push(word);
  }
  var finalTitle = newArray.join(' ');
  return finalTitle;
}

// if word includes '-', split word into array of words
// then capitalize the first letter of each word and push it into a new array
// join the array with '-' in between to create the new string
// word = new string
// add each word to array
// join all the words in the array into a string separated by spaces
// the result of that becomes the output
