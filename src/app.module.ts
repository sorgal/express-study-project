import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot('mongodb://localhost/nest'), BooksModule],
})

export class AppModule {}
