const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/cats', {useNewUrlParser:true})
.then(response => {
    console.log("Соединение с бд успешно");
}).catch(err => {
    console.log("Соединение с не бд успешно");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// app.engine('handlebars',hbs.engine({defaultLayouts: 'default'}));
// app.set('view engine', 'handlebars');

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);

app.listen(3000, () =>{
    console.log(`Сервер запущен`);
});