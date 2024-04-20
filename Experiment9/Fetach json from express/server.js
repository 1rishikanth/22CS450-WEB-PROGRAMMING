const express = require('express');
const app = express();

const jsonData = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

app.get('/data', (req, res) => {
  res.json(jsonData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
