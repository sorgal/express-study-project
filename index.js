const express = require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb')

const errorMiddleware = require('./middleware/error');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/api/users', usersRouter);

app.use(errorMiddleware);

async function start(PORT, UrlDB) {
    try {
        await mongoose.connect(UrlDB)
        app.listen(PORT)
    } catch(e) {
        console.log(e)
    }
}

const UrlDB = process.env.UrlDB || 'mongodb://localhost:27017/mydb';
const PORT = process.env.PORT || 3000;
start(PORT, UrlDB)
