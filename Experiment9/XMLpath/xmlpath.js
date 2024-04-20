const xml2js = require('xml2js');

// Sample XML data
const xmlData = `
<books>
  <book>
    <title>Harry Potter</title>
    <author>J.K. Rowling</author>
  </book>
  <book>
    <title>The Hobbit</title>
    <author>J.R.R. Tolkien</author>
  </book>
</books>
`;

// Parse XML data
xml2js.parseString(xmlData, (err, result) => {
  if (err) {
    console.error('Error parsing XML:', err);
    return;
  }

  // Accessing parsed XML data
  const books = result.books.book;
  console.log('Books:');
  books.forEach((book, index) => {
    console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}`);
  });
});
