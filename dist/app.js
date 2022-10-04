var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("schemas/book.schema", ["@nestjs/mongoose"], function (exports_1, context_1) {
    "use strict";
    var mongoose_1, Book, BookSchema;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (mongoose_1_1) {
                mongoose_1 = mongoose_1_1;
            }
        ],
        execute: function () {
            Book = /** @class */ (function () {
                function Book() {
                }
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "id", void 0);
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "title", void 0);
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "description", void 0);
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "authors", void 0);
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "favorite", void 0);
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "fileCover", void 0);
                __decorate([
                    mongoose_1.Prop(),
                    __metadata("design:type", String)
                ], Book.prototype, "fileName", void 0);
                Book = __decorate([
                    mongoose_1.Schema()
                ], Book);
                return Book;
            }());
            exports_1("Book", Book);
            exports_1("BookSchema", BookSchema = mongoose_1.SchemaFactory.createForClass(Book));
        }
    };
});
System.register("books/dto/create-book.dto", [], function (exports_2, context_2) {
    "use strict";
    var CreateBookDto;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            CreateBookDto = /** @class */ (function () {
                function CreateBookDto() {
                }
                return CreateBookDto;
            }());
            exports_2("CreateBookDto", CreateBookDto);
        }
    };
});
System.register("books/dto/update-book.dto", ["@nestjs/mapped-types", "books/dto/create-book.dto"], function (exports_3, context_3) {
    "use strict";
    var mapped_types_1, create_book_dto_1, UpdateBookDto;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (mapped_types_1_1) {
                mapped_types_1 = mapped_types_1_1;
            },
            function (create_book_dto_1_1) {
                create_book_dto_1 = create_book_dto_1_1;
            }
        ],
        execute: function () {
            UpdateBookDto = /** @class */ (function (_super) {
                __extends(UpdateBookDto, _super);
                function UpdateBookDto() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return UpdateBookDto;
            }(mapped_types_1.PartialType(create_book_dto_1.CreateBookDto)));
            exports_3("UpdateBookDto", UpdateBookDto);
        }
    };
});
System.register("books/books.service", ["mongoose", "@nestjs/common", "@nestjs/mongoose", "schemas/book.schema"], function (exports_4, context_4) {
    "use strict";
    var mongoose_2, common_1, mongoose_3, book_schema_1, BooksService;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (mongoose_2_1) {
                mongoose_2 = mongoose_2_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (mongoose_3_1) {
                mongoose_3 = mongoose_3_1;
            },
            function (book_schema_1_1) {
                book_schema_1 = book_schema_1_1;
            }
        ],
        execute: function () {
            BooksService = /** @class */ (function () {
                function BooksService(bookModel) {
                    this.bookModel = bookModel;
                }
                BooksService.prototype.create = function (createBookDto) {
                    var createdBook = new this.bookModel(createBookDto);
                    createdBook.save();
                    return createdBook;
                };
                BooksService.prototype.findAll = function () {
                    return this.bookModel.find().exec();
                };
                BooksService.prototype.findOne = function (id) {
                    return this.bookModel.findById(id).exec();
                };
                BooksService.prototype.update = function (id, updateBookDto) {
                    var book = this.bookModel.findByIdAndUpdate(id, updateBookDto).exec();
                    return book;
                };
                BooksService.prototype.remove = function (id) {
                    var book = this.bookModel.deleteOne({ id: id }).exec();
                    return book;
                };
                BooksService = __decorate([
                    common_1.Injectable(),
                    __param(0, mongoose_3.InjectModel(book_schema_1.Book.name)),
                    __metadata("design:paramtypes", [mongoose_2.Model])
                ], BooksService);
                return BooksService;
            }());
            exports_4("BooksService", BooksService);
        }
    };
});
System.register("books/books.controller", ["@nestjs/common", "books/books.service", "books/dto/create-book.dto", "books/dto/update-book.dto"], function (exports_5, context_5) {
    "use strict";
    var common_2, books_service_1, create_book_dto_2, update_book_dto_1, BooksController;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            },
            function (create_book_dto_2_1) {
                create_book_dto_2 = create_book_dto_2_1;
            },
            function (update_book_dto_1_1) {
                update_book_dto_1 = update_book_dto_1_1;
            }
        ],
        execute: function () {
            BooksController = /** @class */ (function () {
                function BooksController(booksService) {
                    this.booksService = booksService;
                }
                BooksController.prototype.create = function (createBookDto) {
                    return this.booksService.create(createBookDto);
                };
                BooksController.prototype.findAll = function () {
                    return this.booksService.findAll();
                };
                BooksController.prototype.findOne = function (id) {
                    return this.booksService.findOne(id);
                };
                BooksController.prototype.update = function (id, updateBookDto) {
                    return this.booksService.update(id, updateBookDto);
                };
                BooksController.prototype.remove = function (id) {
                    return this.booksService.remove(id);
                };
                __decorate([
                    common_2.Post(),
                    __param(0, common_2.Body()),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [create_book_dto_2.CreateBookDto]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "create", null);
                __decorate([
                    common_2.Get(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "findAll", null);
                __decorate([
                    common_2.Get(':id'),
                    __param(0, common_2.Param('id')),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "findOne", null);
                __decorate([
                    common_2.Patch(':id'),
                    __param(0, common_2.Param('id')),
                    __param(1, common_2.Body()),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "update", null);
                __decorate([
                    common_2.Delete(':id'),
                    __param(0, common_2.Param('id')),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "remove", null);
                BooksController = __decorate([
                    common_2.Controller('books'),
                    __metadata("design:paramtypes", [books_service_1.BooksService])
                ], BooksController);
                return BooksController;
            }());
            exports_5("BooksController", BooksController);
        }
    };
});
System.register("books/books.module", ["@nestjs/common", "@nestjs/mongoose", "books/books.service", "books/books.controller", "schemas/book.schema"], function (exports_6, context_6) {
    "use strict";
    var common_3, mongoose_4, books_service_2, books_controller_1, book_schema_2, BooksModule;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (mongoose_4_1) {
                mongoose_4 = mongoose_4_1;
            },
            function (books_service_2_1) {
                books_service_2 = books_service_2_1;
            },
            function (books_controller_1_1) {
                books_controller_1 = books_controller_1_1;
            },
            function (book_schema_2_1) {
                book_schema_2 = book_schema_2_1;
            }
        ],
        execute: function () {
            BooksModule = /** @class */ (function () {
                function BooksModule() {
                }
                BooksModule = __decorate([
                    common_3.Module({
                        imports: [mongoose_4.MongooseModule.forFeature([{ name: book_schema_2.Book.name, schema: book_schema_2.BookSchema }])],
                        controllers: [books_controller_1.BooksController],
                        providers: [books_service_2.BooksService]
                    })
                ], BooksModule);
                return BooksModule;
            }());
            exports_6("BooksModule", BooksModule);
        }
    };
});
System.register("app.module", ["@nestjs/common", "@nestjs/mongoose", "books/books.module", "@nestjs/config"], function (exports_7, context_7) {
    "use strict";
    var common_4, mongoose_5, books_module_1, config_1, AppModule;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (common_4_1) {
                common_4 = common_4_1;
            },
            function (mongoose_5_1) {
                mongoose_5 = mongoose_5_1;
            },
            function (books_module_1_1) {
                books_module_1 = books_module_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    common_4.Module({
                        imports: [config_1.ConfigModule.forRoot(), mongoose_5.MongooseModule.forRoot('mongodb://localhost/nest'), books_module_1.BooksModule],
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_7("AppModule", AppModule);
        }
    };
});
System.register("book_repository", [], function (exports_8, context_8) {
    "use strict";
    var Book, BookRepository;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            Book = require('./models/book');
            BookRepository = /** @class */ (function () {
                function BookRepository() {
                }
                BookRepository.prototype.createBook = function (book) {
                    return __awaiter(this, void 0, void 0, function () {
                        var newBook;
                        return __generator(this, function (_a) {
                            newBook = new Book(book);
                            try {
                                newBook.save();
                                return [2 /*return*/, { id: newBook.id,
                                        description: newBook.description,
                                        authors: newBook.authors,
                                        favorite: newBook.favorite,
                                        fileCover: newBook.fileCover,
                                        fileName: newBook.fileName,
                                        fileBook: newBook.fileBook
                                    }];
                            }
                            catch (e) {
                                console.log(e);
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                BookRepository.prototype.getBook = function (id) {
                    return __awaiter(this, void 0, void 0, function () {
                        var book, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Book.findById(id).select('-__v')];
                                case 1:
                                    book = _a.sent();
                                    return [2 /*return*/, { id: book.id,
                                            description: book.description,
                                            authors: book.authors,
                                            favorite: book.favorite,
                                            fileCover: book.fileCover,
                                            fileName: book.fileName,
                                            fileBook: book.fileBook
                                        }];
                                case 2:
                                    e_1 = _a.sent();
                                    console.log(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                BookRepository.prototype.getBooks = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var books, booksList_1, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Book.find().select('-__v')];
                                case 1:
                                    books = _a.sent();
                                    booksList_1 = new Array;
                                    books.forEach(function (book) {
                                        booksList_1.push({ id: book.id,
                                            description: book.description,
                                            authors: book.authors,
                                            favorite: book.favorite,
                                            fileCover: book.fileCover,
                                            fileName: book.fileName,
                                            fileBook: book.fileBook
                                        });
                                    });
                                    return [2 /*return*/, booksList_1];
                                case 2:
                                    e_2 = _a.sent();
                                    console.log(e_2);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                BookRepository.prototype.updateBook = function (id, book) {
                    return __awaiter(this, void 0, void 0, function () {
                        var e_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Book.findByIdAndUpdate(id, book)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, { id: book.id,
                                            description: book.description,
                                            authors: book.authors,
                                            favorite: book.favorite,
                                            fileCover: book.fileCover,
                                            fileName: book.fileName,
                                            fileBook: book.fileBook
                                        }];
                                case 2:
                                    e_3 = _a.sent();
                                    console.log(e_3);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                BookRepository.prototype.deleteBook = function (id) {
                    return __awaiter(this, void 0, void 0, function () {
                        var book, e_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Book.deleteOne({ _id: id })];
                                case 1:
                                    book = _a.sent();
                                    return [2 /*return*/, true];
                                case 2:
                                    e_4 = _a.sent();
                                    console.log(e_4);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                return BookRepository;
            }());
            exports_8("BookRepository", BookRepository);
        }
    };
});
System.register("container", ["reflect-metadata", "inversify", "book_repository"], function (exports_9, context_9) {
    "use strict";
    var inversify_1, book_repository_1, container;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (_1) {
            },
            function (inversify_1_1) {
                inversify_1 = inversify_1_1;
            },
            function (book_repository_1_1) {
                book_repository_1 = book_repository_1_1;
            }
        ],
        execute: function () {
            container = new inversify_1.Container();
            exports_9("container", container);
            container.bind(book_repository_1.BookRepository).toSelf();
        }
    };
});
