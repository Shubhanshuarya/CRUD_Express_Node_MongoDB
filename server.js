const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 4000;

//log requests
app.use(morgan('tiny'));

// Parse request to body parser
app.use(bodyParser.urlencoded({ extended: true}))

//set view engine
app.set('view engine', "ejs");
// app.set('views', path.resolve(__dirname, 'views/ejs'));

// Load Assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// css/style.css
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));

app.get('/', (req, res) => {
    // res.send("Crud Application");
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})