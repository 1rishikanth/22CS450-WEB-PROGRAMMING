const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('book.xml', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(data);
        }
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
