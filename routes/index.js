const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')
const fs = require('fs');

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

router.post('/api/user/login', (req, res) => {
    res.status(201)
    res.json({ id: 1, mail: "test@mail.ru" })
})

router.get('/api/books', (req, res) => {
    const {books} = stor
    res.json(books)
})

router.get('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if( idx !== -1) {
        res.json(books[idx])
    } else {
        res.status(404)
        res.json('404 | книга не найдена')
    }

})

router.post('/api/books/', (req, res) => {
    const {books} = stor
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body

    const newbooks = new Book(title, description, authors, favorite, fileCover, fileName, fileBook)
    books.push(newbooks)

    res.status(201)
    res.json(newbooks)
})

router.put('/api/books/:id', (req, res) => {
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

        res.json(books[idx])
    } else {
        res.status(404)
        res.json('404 | книга не найдена')
    }
})

router.delete('/api/books/:id', (req, res) => {
    const {books} = stor
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)
     
    if(idx !== -1){
        books.splice(idx, 1)
        res.json(true)
    } else {
        res.status(404)
        res.json('404 | книга не найдена')
    }
})

router.post('/api/books/upload', 
    fileMulter.single('book'),
    (req, res) => {
        if(req.file){
            const {path} = req.file
            const {title, description, authors, favorite, fileCover, fileName, fileBook} = JSON.parse(fs.readFileSync(path))
            const {books} = stor

            const newbooks = new Book(title, description, authors, favorite, fileCover, fileName, fileBook)
            books.push(newbooks)

            res.status(201)
            res.json(newbooks)
        }
        res.json()
    })

module.exports = router