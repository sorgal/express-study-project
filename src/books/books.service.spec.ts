import { Test, TestingModule } from '@nestjs/testing';
import {expect, describe, beforeEach, it } from '@jest/globals';
import { BooksService } from './books.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from '../schemas/book.schema';

describe('BooksService', () => {
  let bookId: string;

  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: bookModel,
        },],
    }).compile();

    service = module.get<BooksService>(BooksService);

    ({id: bookId} = await service.create({
      id: 'testBefore',
      title: 'testBefore',
      description: 'testBefore',
      authors: 'testBefore',
      favorite: 'testBefore',
      fileCover: 'testBefore',
      fileName: 'testBefore',
    }))
  });

  describe('Create method', () => {
    it('should create and return a book', async () => {
        const payload = {
          id: 'test',
          title: 'test',
          description: 'test',
          authors: 'test',
          favorite: 'test',
          fileCover: 'test',
          fileName: 'test',
        }

        const book = await service.create(payload)
        expect(book).not.toBeNull()
    })
  })

  describe('Update method', () => {
    it('should update and return a book', async () => {
        const payload = {
          id: 'test',
          title: 'test',
          description: 'test',
          authors: 'test',
          favorite: 'test',
          fileCover: 'test',
          fileName: 'test',
        }

        await service.update(bookId, payload)
        const book = await service.findOne(bookId)
        expect(book?.description).toEqual('A legume')
    })
  })

  describe('Find method', () => {
    it('should find and return a book', async () => {
        const book = await service.findOne(bookId)
        expect(book).not.toBeNull()
    })
  })

  describe('Remove method', () => {
    it('should remove and return a book', async () => {
        await service.remove(bookId)
        const book = await service.findOne(bookId)
        expect(book).toBeNull()
    })
  })
  
});
