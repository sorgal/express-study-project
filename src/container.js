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
System.register("book_repository", [], function (exports_1, context_1) {
    "use strict";
    var Book, BookRepository;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Book = require('../models/book');
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
            exports_1("BookRepository", BookRepository);
        }
    };
});
System.register("container", ["reflect-metadata", "inversify", "book_repository"], function (exports_2, context_2) {
    "use strict";
    var inversify_1, book_repository_1, container;
    var __moduleName = context_2 && context_2.id;
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
            exports_2("container", container);
            container.bind(book_repository_1.BookRepository).toSelf();
        }
    };
});
