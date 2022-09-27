const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')
const fs = require('fs');
const axios = require('axios');
const Book = require('../models/book')
const Comment = require('../models/comment')
const container = require('../src/container')

router.get('/', async (req, res) => {
    try {
        const books = await Book.find().select('-__v')
        res.render("books/index", {
            title: "Books",
            books: books,
        });
    } catch(e) {
        res.status(500).json(e)
    }
})

router.get('/create', (req, res) => {
    res.render("books/create", {
        title: "Books | new",
        book: {},
    });
});

router.post('/create', async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body

    const newBook = new Book({ title, description, authors, favorite, fileCover, fileName, fileBook })

    try {
        await newBook.save()
        res.redirect('/books')
    } catch(e) {
        res.status(500).json(e)
    }
})

router.get('/:id',  (req, res) => {
    const {id} = req.params
    
    try {
        const repo = container.get(BooksRepository);
        const book = await repo.getBook(id);
        const comments = await Comment.find({ roomName: id })
        if (!book.id.length) {
            res.redirect('/404');
        }
            
        res.render("books/view", {
            title: "Book | view",
            book: book,
            comments: comments
        });
    } catch(e) {
        res.status(500).json(e)
    }
})

router.get('/update/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id).select('-__v')
    
        if (!book.id.length) {
            res.redirect('/404');
        } 
    
        res.render("books/update", {
            title: "Books | view",
            book: book,
        });
    } catch(e) {
        res.status(500).json(e)
    }
});

router.post('/update/:id', async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const {id} = req.params

    try {
        await Book.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName, fileBook})
    
        res.redirect(`/books/${id}`);
    } catch(e) {
        res.status(500).json(e)
    }
})

router.post('/delete/:id', async (req, res) => {
    const {id} = req.params

    try {
        await Book.deleteOne({ _id: id })
    
        res.redirect(`/books/`);
    } catch(e) {
        res.status(500).json(e)
    }
})

module.exports = router
