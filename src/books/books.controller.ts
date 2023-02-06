import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UsePipes, UseFilters } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { LoggingInterceptor } from '../app.logging.interceptor';
import { ValidationPipe } from '../app.validation.pipe';
import { bookSchema } from './book.schema';
import {HttpExceptionFilter} from "../http.exception.filter";

@UseInterceptors(LoggingInterceptor)
@UsePipes(ValidationPipe)
@UseFilters(HttpExceptionFilter)

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body(new ValidationPipe(bookSchema)) createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe(bookSchema)) updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
