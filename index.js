const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('chefs dining is running')
})

app.listen(port, () => {
  console.log(`chefs dining running in server ${port}`)
})