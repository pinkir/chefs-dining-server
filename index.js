const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
  res.send('chefs dining is running')
})

app.get('/chefs', (req, res) =>{
  res.send(chefs);
})

app.get('/recipes', (req, res) =>{
  res.send(recipes);
})

app.get('/recipes/:id', (req, res) =>{
  const id = req.params.id;
  // console.log(id);
  const selectedRecipes = recipes.find(r => r.id == id);
  res.send(selectedRecipes);
})

app.get('/chefs/:id', (req, res)=>{
  const id =req.params.id;
  // console.log(id);
  const chefsRecipes = recipes.filter(r => r.chef_id == id);
  res.send(chefsRecipes);
})

app.listen(port, () => {
  console.log(`chefs dining running in server ${port}`)
})