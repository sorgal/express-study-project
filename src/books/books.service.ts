import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from '../schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  create(createBookDto: CreateBookDto) {
    const createdBook = new this.bookModel(createBookDto);
    createdBook.save();

    return createdBook;
  }

  findAll() {
    return this.bookModel.find().exec();
  }

  findOne(id: string) {
    return this.bookModel.findById(id).exec();
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const book = this.bookModel.findByIdAndUpdate(id, updateBookDto).exec();
    return book;
  }

  remove(id: string) {
    const book = this.bookModel.deleteOne({ id: id }).exec();
    return book;
  }
}
