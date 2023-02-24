import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookComment, BookCommentDocument } from '../schemas/book_comment_schema';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { UpdateBookCommentDto } from './dto/update-book-comment.dto';

@Injectable()
export class BookCommentsService {
  constructor(@InjectModel(BookComment.name) private bookCommentModel: Model<BookCommentDocument>) {}

  create(createBookCommentDto: CreateBookCommentDto) {
    const createdBook = new this.bookCommentModel(createBookCommentDto);
    createdBook.save();

    return createdBook;
  }

  findAll(bookId: string) {
    return this.bookCommentModel.find({ bookId: bookId }).exec();
  }

  findOne(id: string) {
    return this.bookCommentModel.findById(id).exec();
  }

  update(id: string, updateBookCommentDto: UpdateBookCommentDto) {
    const book = this.bookCommentModel.findByIdAndUpdate(id, updateBookCommentDto).exec();
    return book;
  }

  remove(id: string) {
    const book = this.bookCommentModel.deleteOne({ id: id }).exec();
    return book;
  }
}
