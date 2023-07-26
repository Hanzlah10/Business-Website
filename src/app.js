
const express = require("express");
require("./db/conn");
const User = require("./db/models/userDynamic")
const hbs = require("hbs");
const path = require("path");
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 80;


//static html means bahr ki html file not html using tempalate engine
// This is for Css required in this project 
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// console.log(staticPath);


//middle ware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));
app.set("views", templatesPath);

app.use(express.urlencoded({ extended: false }));



//Setting Template Engine
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/contact', async (req, res) => {
    try {
        const myData = new User(req.body);
        await myData.save();
             res.status(201).render('index');

        }catch(error) {
            res.status(500).send(error);
        }
    });

app.get('/gallery', (req, res) => {
    res.render("gallery");
});

app.listen(port, () => {
    console.log(`The server has been started sucessfully on port ${port}`);
});