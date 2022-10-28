var books = [
  {
    isbn: '9780739377451',
    title: 'The Five People You Meet in Heaven',
    author: 'Mitch Albom'
  },
  {
    isbn: '9781401303273',
    title: 'For One More Day',
    author: 'Mitch Albom'
  },
  {
    isbn: '9780751529814',
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom'
  }
];
console.log('value of typeof books:', typeof books);

var stringify = JSON.stringify(books);
console.log('value of typeof stringify:', typeof stringify);

var student = '{"String name": "name of a string", "Number ID": 12345}';
console.log('value of typeof student:', typeof student);

var parse = JSON.parse(student);
console.log('value of typeof parse:', typeof parse);
