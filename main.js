const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const productsRouter = require('./routes/products.routes');
const authRouter = require('./routes/auth.routes');
const apiRouter = require('./routes/api.routes');

mongoose.connect('mongodb://127.0.0.1:27017/medistore');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));
app.use(session({
    secret: 'SDHSHOSDHDSFIH',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


app.use(productsRouter);
app.use(authRouter);
app.use(apiRouter);

app.listen(3000, () => {
    console.log("Server started on: http://localhost:3000");
});