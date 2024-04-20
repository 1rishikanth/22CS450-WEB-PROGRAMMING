const xpath = require('xpath');
const dom = require('xmldom').DOMParser;

// Sample XML data
const xmlData = `
<library>
    <book>
        <title>Book 1</title>
        <author>Author 1</author>
    </book>
    <book>
        <title>Book 2</title>
        <author>Author 2</author>
    </book>
    <book>
        <title>Book 3</title>
        <author>Author 3</author>
    </book>
</library>`;

// Parse XML data
const doc = new dom().parseFromString(xmlData);

// Define XPath query
const xpathQuery = '//book[author="Author 2"]/title';

// Execute XPath query
const result = xpath.select(xpathQuery, doc);

// Print the result
console.log('Result:', result[0].firstChild.data);
