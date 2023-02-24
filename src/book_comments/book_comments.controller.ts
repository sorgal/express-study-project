import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UsePipes, UseFilters, UseGuards } from '@nestjs/common';
import { BookCommentsService } from './book_comments.service';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { UpdateBookCommentDto } from './dto/update-book-comment.dto';

import { LoggingInterceptor } from '../app.logging.interceptor';
import { ValidationPipe } from '../app.validation.pipe';
import { bookCommentSchema } from './book_comment.schema';
import {HttpExceptionFilter} from "../http.exception.filter";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";

@UseInterceptors(LoggingInterceptor)
@UsePipes(ValidationPipe)
@UseFilters(HttpExceptionFilter)

@Controller('books')
export class BookCommentsController {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(new ValidationPipe(bookCommentSchema)) createBookCommentDto: CreateBookCommentDto) {
    return this.bookCommentsService.create(createBookCommentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.bookCommentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookCommentsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe(bookCommentSchema)) updateBookDto: UpdateBookCommentDto) {
    return this.bookCommentsService.update(id, updateBookDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCommentsService.remove(id);
  }
}
