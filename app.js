const express = require('express');

const app = express();

app.set('view engine', "ejs");

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render("main")
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`OnTopLocal Project Live on port ${PORT}`)
});