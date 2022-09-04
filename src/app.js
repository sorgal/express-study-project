"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Book = require('../models/book');
class BookRepository {
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = new Book(book);
            try {
                newBook.save();
                return { id: newBook.id,
                    description: newBook.description,
                    authors: newBook.authors,
                    favorite: newBook.favorite,
                    fileCover: newBook.fileCover,
                    fileName: newBook.fileName,
                    fileBook: newBook.fileBook
                };
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield Book.findById(id).select('-__v');
                return { id: book.id,
                    description: book.description,
                    authors: book.authors,
                    favorite: book.favorite,
                    fileCover: book.fileCover,
                    fileName: book.fileName,
                    fileBook: book.fileBook
                };
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield Book.find().select('-__v');
                let booksList = new Array;
                books.forEach(function (book) {
                    booksList.push({ id: book.id,
                        description: book.description,
                        authors: book.authors,
                        favorite: book.favorite,
                        fileCover: book.fileCover,
                        fileName: book.fileName,
                        fileBook: book.fileBook
                    });
                });
                return booksList;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Book.findByIdAndUpdate(id, book);
                return { id: book.id,
                    description: book.description,
                    authors: book.authors,
                    favorite: book.favorite,
                    fileCover: book.fileCover,
                    fileName: book.fileName,
                    fileBook: book.fileBook
                };
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield Book.deleteOne({ _id: id });
                return true;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
