import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot('mongodb://localhost/nest'), BooksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
