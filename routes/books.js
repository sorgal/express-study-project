const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')
const fs = require('fs');
const axios = require('axios');

const { v4: uuid } = require('uuid')

class Book {
    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", fileBook = "", id = uuid()) {
        this.title = title
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
        this.fileBook = fileBook
        this.id = id
    }
}

const stor = {
    books: [
        new Book(),
        new Book(),
    ],
};

router.post('/user/login', (req, res) => {
    res.status(201)
    res.json({ id: 1, mail: "test@mail.ru" })
})

router.get('/', (req, res) => {
    const {books} = stor
    res.render("books/index", {
        title: "Books",
        books: books,
    });
})

router.get('/create', (req, res) => {
    res.render("books/create", {
        title: "Books | new",
        book: {},
    });
});

router.post('/create', (req, res) => {
    const {books} = stor
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body

    const newbooks = new Book(title, description, authors, favorite, fileCover, fileName, fileBook)
    books.push(newbooks)

    res.redirect('/books')
})

router.get('/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
    
    axios
        .get(`http://localhost:3001/counter/${id}`)
        .then(response => {
            response.data

            if (idx === -1) {
                res.redirect('/404');
            } 
                
            res.render("books/view", {
                title: "Book | view",
                book: books[idx],
                counter: response.data,
            });
        })
        .catch(error => {
            console.error(error);
            0
        });
})

router.get('/update/:id', (req, res) => {
    const {books} = stor;
    const {id} = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx === -1) {
        res.redirect('/404');
    } 

    res.render("books/update", {
        title: "Books | view",
        book: books[idx],
    });
});

router.post('/update/:id', (req, res) => {
    const {books} = stor
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if (idx !== -1){
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
            fileBook
        }

        res.redirect(`/books/${id}`);
    } else {
        res.redirect('/404');
    }
})

router.post('/delete/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
     
    if(idx !== -1){
        books.splice(idx, 1)
        res.redirect(`/books`);
    } else {
        res.redirect('/404');
    }
})

module.exports = router
