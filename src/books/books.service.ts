import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

const { v4: uuid } = require('uuid')

class Book {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;

    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", id = uuid()) {
        this.title = title
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
        this.id = id
    }
}

const stor = {
  books: [
      new Book(),
      new Book(),
  ],
};

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    const {books} = stor
    const {title, description, authors, favorite, fileCover, fileName} = createBookDto

    const newbooks = new Book(title, description, authors, favorite, fileCover, fileName)
    books.push(newbooks)

    return newbooks;
  }

  findAll() {
    const {books} = stor
    return books;
  }

  findOne(id: string) {
    const {books} = stor
    const idx = books.findIndex(el => el.id === id)

    if( idx !== -1) {
        return books[idx];
    } else {
       return '404 | книга не найдена';
    }
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const {books} = stor
    const {title, description, authors, favorite, fileCover, fileName} = updateBookDto
    const idx = books.findIndex(el => el.id === id)

    if (idx !== -1){
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        }
        return books[idx];
    } else {
       return '404 | книга не найдена';
    }
  }

  remove(id: string) {
    const {books} = stor
    const idx = books.findIndex(el => el.id === id)

    if(idx !== -1){
        books.splice(idx, 1)
        return true;
    } else {
       return '404 | книга не найдена';
    }
  }
}
