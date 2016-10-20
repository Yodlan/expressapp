const express = require('express');
const ejs = require('ejs');
const app = express();
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res, next) {
   res.render('index.ejs', { names: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'] });
});
const port = 3000;
app.listen(port, () => console.log('Server listening on: ${port}'));
