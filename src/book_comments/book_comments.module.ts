import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookCommentsService } from './book_comments.service';
import { BookCommentsController } from './book_comments.controller';
import { Book, BookSchema } from '../schemas/book.schema';
import { BookCommentsGateway } from './book_comment.gateway';


@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BookCommentsController],
  providers: [BookCommentsService, BookCommentsGateway]
})
export class BookCommentsModule {}
