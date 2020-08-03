const express = require('express')
const path = require('path')
const morgan = require('morgan')


const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');



//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })) // convierte en JSON

//Routes
app.use(require('./routes/entries.routes'));

// 404 handler

app.use((req, res) => {
    res.status(404).render('404');

});


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

//Starting the app