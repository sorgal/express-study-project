import { Test, TestingModule } from '@nestjs/testing';
import {expect, jest, describe, beforeEach, it } from '@jest/globals';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { BooksModule } from './../src/books/books.module';
import { BooksService } from './../src/books/books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from '../src/schemas/book.schema';

jest.mock('./../src/books/books.service');

const mockedService = <jest.Mock<BooksService>>BooksService;

describe('BooksController (e2e)', () => {
  let app: INestApplication;

  let payload: {
      id: 'test',
      title: 'test',
      description: 'test',
      authors: 'test',
      favorite: 'test',
      fileCover: 'test',
      fileName: 'test',
    }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [BooksModule],
      providers: [BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: bookModel,
        },],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .send(payload)
      .expect(200)
      .expect(payload);
  });

  it('/:id (GET)', () => {

    return request(app.getHttpServer())
      .get('/')
      .send('test')
      .expect(200)
      .expect(payload);
  });

  it('/:id (GET)', () => {

    return request(app.getHttpServer())
      .get('/')
      .send('test')
      .expect(200)
      .expect(payload);
  });

  it('/:id (PATCH)', () => {

    return request(app.getHttpServer())
      .patch('/')
      .send('test', payload)
      .expect(200)
      .expect(payload);
  });

  it('/remove/:id (DELETE)', () => {

    return request(app.getHttpServer())
      .delete('/remove')
      .send('test')
      .expect(200)
      .expect(payload);
  });
});