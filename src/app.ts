const Book = require('../models/book')

interface BookInterface {
    id: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
    fileBook: string;
}

class BookRepository {
    async createBook(book: BookInterface): Promise<BookInterface> {
        const newBook = new Book(book)

        try {            
            newBook.save()
            return { id: newBook.id, 
                description: newBook.description, 
                authors: newBook.authors, 
                favorite: newBook.favorite, 
                fileCover: newBook.fileCover, 
                fileName: newBook.fileName, 
                fileBook: newBook.fileBook
            }
        } catch(e) {
            console.log(e)
        }
    }
    async getBook(id: string): Promise<BookInterface> {
        try {
            const book = await Book.findById(id).select('-__v')
            return { id: book.id, 
                description: book.description, 
                authors: book.authors, 
                favorite: book.favorite, 
                fileCover: book.fileCover, 
                fileName: book.fileName, 
                fileBook: book.fileBook
            }
        } catch(e) {
            console.log(e)
        }
    }
    async getBooks(): Promise<BookInterface[]> {
        try {
            const books = await Book.find().select('-__v')
            let booksList = new Array
            books.forEach(function (book: BookInterface) {
                booksList.push({ id: book.id, 
                    description: book.description, 
                    authors: book.authors, 
                    favorite: book.favorite, 
                    fileCover: book.fileCover, 
                    fileName: book.fileName, 
                    fileBook: book.fileBook
                })
            }); 
            return booksList
        } catch(e) {
            console.log(e)
        }
    }
    async updateBook(id: string, book: BookInterface): Promise<BookInterface> {
        try {
            await Book.findByIdAndUpdate(id, book)
            return { id: book.id, 
                description: book.description, 
                authors: book.authors, 
                favorite: book.favorite, 
                fileCover: book.fileCover, 
                fileName: book.fileName, 
                fileBook: book.fileBook
            }
        } catch(e) {
            console.log(e)
        }
    }

    async deleteBook(id: string): Promise<Boolean> {
        try {
            const book = await Book.deleteOne({ _id: id })
            return true
        } catch(e) {
            console.log(e)
        }
    }
}
