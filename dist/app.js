var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("app.service", ["@nestjs/common"], function (exports_1, context_1) {
    "use strict";
    var common_1, AppService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            AppService = /** @class */ (function () {
                function AppService() {
                }
                AppService.prototype.getHello = function () {
                    return 'Hello World!';
                };
                AppService = __decorate([
                    common_1.Injectable()
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    };
});
System.register("auth/jwt.auth.guard", ["@nestjs/common", "@nestjs/passport"], function (exports_2, context_2) {
    "use strict";
    var common_2, passport_1, JwtAuthGuard;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (passport_1_1) {
                passport_1 = passport_1_1;
            }
        ],
        execute: function () {
            JwtAuthGuard = /** @class */ (function (_super) {
                __extends(JwtAuthGuard, _super);
                function JwtAuthGuard() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                JwtAuthGuard.prototype.canActivate = function (context) {
                    return _super.prototype.canActivate.call(this, context);
                };
                JwtAuthGuard.prototype.handleRequest = function (err, user, info) {
                    if (err) {
                        throw err;
                    }
                    if (!user) {
                        throw new common_2.UnauthorizedException();
                    }
                    return user;
                };
                JwtAuthGuard = __decorate([
                    common_2.Injectable()
                ], JwtAuthGuard);
                return JwtAuthGuard;
            }(passport_1.AuthGuard('jwt')));
            exports_2("JwtAuthGuard", JwtAuthGuard);
        }
    };
});
System.register("auth/auth.service", ["@nestjs/common", "@nestjs/jwt"], function (exports_3, context_3) {
    "use strict";
    var common_3, jwt_1, User, AuthService;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (jwt_1_1) {
                jwt_1 = jwt_1_1;
            }
        ],
        execute: function () {
            User = require('./models/user');
            AuthService = /** @class */ (function () {
                function AuthService(jwtService) {
                    this.jwtService = jwtService;
                }
                AuthService.prototype.validateUser = function (id) {
                    return __awaiter(this, void 0, void 0, function () {
                        var user;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, User.findById(id)];
                                case 1:
                                    user = _a.sent();
                                    if (user) {
                                        return [2 /*return*/, user];
                                    }
                                    return [2 /*return*/, null];
                            }
                        });
                    });
                };
                AuthService.prototype.createToken = function (payload) {
                    return this.jwtService.sign(payload);
                };
                AuthService = __decorate([
                    common_3.Injectable(),
                    __metadata("design:paramtypes", [jwt_1.JwtService])
                ], AuthService);
                return AuthService;
            }());
            exports_3("AuthService", AuthService);
        }
    };
});
System.register("app.controller", ["@nestjs/common", "app.service", "auth/jwt.auth.guard", "auth/auth.service"], function (exports_4, context_4) {
    "use strict";
    var common_4, app_service_1, jwt_auth_guard_1, auth_service_1, User, AppController;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (common_4_1) {
                common_4 = common_4_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (jwt_auth_guard_1_1) {
                jwt_auth_guard_1 = jwt_auth_guard_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }
        ],
        execute: function () {
            User = require('./models/user');
            AppController = /** @class */ (function () {
                function AppController(appService, authService) {
                    this.appService = appService;
                    this.authService = authService;
                }
                AppController.prototype.getHello = function () {
                    return this.appService.getHello();
                };
                AppController.prototype.getToken = function (userId) {
                    var user = User.findById(userId);
                    return this.authService.createToken({ id: userId, email: user.email, firstName: user.firstName });
                };
                AppController.prototype.login = function (req) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, req.user];
                        });
                    });
                };
                __decorate([
                    common_4.Get(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", String)
                ], AppController.prototype, "getHello", null);
                __decorate([
                    common_4.Get('/token'),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String]),
                    __metadata("design:returntype", String)
                ], AppController.prototype, "getToken", null);
                __decorate([
                    common_4.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
                    common_4.Post('/login'),
                    __param(0, common_4.Request()),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [Object]),
                    __metadata("design:returntype", Promise)
                ], AppController.prototype, "login", null);
                AppController = __decorate([
                    common_4.Controller(),
                    __metadata("design:paramtypes", [app_service_1.AppService, auth_service_1.AuthService])
                ], AppController);
                return AppController;
            }());
            exports_4("AppController", AppController);
        }
    };
});
System.register("app.logging.interceptor", ["@nestjs/common", "express", "rxjs", "rxjs/operators"], function (exports_5, context_5) {
    "use strict";
    var common_5, express_1, rxjs_1, operators_1, LoggingInterceptor;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (common_5_1) {
                common_5 = common_5_1;
            },
            function (express_1_1) {
                express_1 = express_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            }
        ],
        execute: function () {
            LoggingInterceptor = /** @class */ (function () {
                function LoggingInterceptor() {
                }
                LoggingInterceptor.prototype.intercept = function (context, next) {
                    return next
                        .handle()
                        .pipe(operators_1.tap(function (data) {
                        return express_1.response.json({ status: 'success', data: data });
                    }), operators_1.catchError(function (err) {
                        return rxjs_1.throwError({ status: 'error', data: err });
                    }));
                };
                LoggingInterceptor = __decorate([
                    common_5.Injectable()
                ], LoggingInterceptor);
                return LoggingInterceptor;
            }());
            exports_5("LoggingInterceptor", LoggingInterceptor);
        }
    };
});
System.register("schemas/book.schema", ["@nestjs/mongoose"], function (exports_6, context_6) {
    "use strict";
    var mongoose_1, Book, BookSchema;
    var __moduleName = context_6 && context_6.id;
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
            exports_6("Book", Book);
            exports_6("BookSchema", BookSchema = mongoose_1.SchemaFactory.createForClass(Book));
        }
    };
});
System.register("books/dto/create-book.dto", [], function (exports_7, context_7) {
    "use strict";
    var CreateBookDto;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
            CreateBookDto = /** @class */ (function () {
                function CreateBookDto() {
                }
                return CreateBookDto;
            }());
            exports_7("CreateBookDto", CreateBookDto);
        }
    };
});
System.register("books/dto/update-book.dto", ["@nestjs/mapped-types", "books/dto/create-book.dto"], function (exports_8, context_8) {
    "use strict";
    var mapped_types_1, create_book_dto_1, UpdateBookDto;
    var __moduleName = context_8 && context_8.id;
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
            exports_8("UpdateBookDto", UpdateBookDto);
        }
    };
});
System.register("books/books.service", ["mongoose", "@nestjs/common", "@nestjs/mongoose", "schemas/book.schema"], function (exports_9, context_9) {
    "use strict";
    var mongoose_2, common_6, mongoose_3, book_schema_1, BooksService;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (mongoose_2_1) {
                mongoose_2 = mongoose_2_1;
            },
            function (common_6_1) {
                common_6 = common_6_1;
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
                    common_6.Injectable(),
                    __param(0, mongoose_3.InjectModel(book_schema_1.Book.name)),
                    __metadata("design:paramtypes", [mongoose_2.Model])
                ], BooksService);
                return BooksService;
            }());
            exports_9("BooksService", BooksService);
        }
    };
});
System.register("app.validation.pipe", ["@nestjs/common"], function (exports_10, context_10) {
    "use strict";
    var common_7, ValidationPipe;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (common_7_1) {
                common_7 = common_7_1;
            }
        ],
        execute: function () {
            ValidationPipe = /** @class */ (function () {
                function ValidationPipe(schema) {
                    this.schema = schema;
                }
                ValidationPipe.prototype.transform = function (value, metadata) {
                    var error = this.schema.validate(value).error;
                    if (error) {
                        throw new common_7.BadRequestException('Validation failed');
                    }
                    return value;
                };
                ValidationPipe = __decorate([
                    common_7.Injectable(),
                    __metadata("design:paramtypes", [Object])
                ], ValidationPipe);
                return ValidationPipe;
            }());
            exports_10("ValidationPipe", ValidationPipe);
        }
    };
});
System.register("books/book.schema", ["joi"], function (exports_11, context_11) {
    "use strict";
    var Joi, bookSchema;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (Joi_1) {
                Joi = Joi_1;
            }
        ],
        execute: function () {
            exports_11("bookSchema", bookSchema = Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                authors: Joi.number().required(),
                favorite: Joi.number().optional(),
                fileCover: Joi.string().optional(),
                fileName: Joi.string().optional(),
                fileBook: Joi.string().optional()
            }));
        }
    };
});
System.register("http.exception.filter", ["@nestjs/common"], function (exports_12, context_12) {
    "use strict";
    var common_8, HttpExceptionFilter;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (common_8_1) {
                common_8 = common_8_1;
            }
        ],
        execute: function () {
            HttpExceptionFilter = /** @class */ (function () {
                function HttpExceptionFilter() {
                }
                HttpExceptionFilter.prototype.catch = function (exception, host) {
                    var ctx = host.switchToHttp();
                    var response = ctx.getResponse();
                    var status = exception.getStatus();
                    response
                        .status(status)
                        .json({
                        timestamp: new Date().toISOString(),
                        status: 'fail',
                        data: exception.message,
                        code: exception.getStatus()
                    });
                };
                HttpExceptionFilter = __decorate([
                    common_8.Catch(common_8.HttpException)
                ], HttpExceptionFilter);
                return HttpExceptionFilter;
            }());
            exports_12("HttpExceptionFilter", HttpExceptionFilter);
        }
    };
});
System.register("books/books.controller", ["@nestjs/common", "books/books.service", "books/dto/create-book.dto", "books/dto/update-book.dto", "app.logging.interceptor", "app.validation.pipe", "books/book.schema", "http.exception.filter", "auth/jwt.auth.guard"], function (exports_13, context_13) {
    "use strict";
    var common_9, books_service_1, create_book_dto_2, update_book_dto_1, app_logging_interceptor_1, app_validation_pipe_1, book_schema_2, http_exception_filter_1, jwt_auth_guard_2, BooksController;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (common_9_1) {
                common_9 = common_9_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            },
            function (create_book_dto_2_1) {
                create_book_dto_2 = create_book_dto_2_1;
            },
            function (update_book_dto_1_1) {
                update_book_dto_1 = update_book_dto_1_1;
            },
            function (app_logging_interceptor_1_1) {
                app_logging_interceptor_1 = app_logging_interceptor_1_1;
            },
            function (app_validation_pipe_1_1) {
                app_validation_pipe_1 = app_validation_pipe_1_1;
            },
            function (book_schema_2_1) {
                book_schema_2 = book_schema_2_1;
            },
            function (http_exception_filter_1_1) {
                http_exception_filter_1 = http_exception_filter_1_1;
            },
            function (jwt_auth_guard_2_1) {
                jwt_auth_guard_2 = jwt_auth_guard_2_1;
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
                    common_9.UseGuards(jwt_auth_guard_2.JwtAuthGuard),
                    common_9.Post(),
                    __param(0, common_9.Body(new app_validation_pipe_1.ValidationPipe(book_schema_2.bookSchema))),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [create_book_dto_2.CreateBookDto]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "create", null);
                __decorate([
                    common_9.UseGuards(jwt_auth_guard_2.JwtAuthGuard),
                    common_9.Get(),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "findAll", null);
                __decorate([
                    common_9.UseGuards(jwt_auth_guard_2.JwtAuthGuard),
                    common_9.Get(':id'),
                    __param(0, common_9.Param('id')),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "findOne", null);
                __decorate([
                    common_9.UseGuards(jwt_auth_guard_2.JwtAuthGuard),
                    common_9.Patch(':id'),
                    __param(0, common_9.Param('id')),
                    __param(1, common_9.Body(new app_validation_pipe_1.ValidationPipe(book_schema_2.bookSchema))),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "update", null);
                __decorate([
                    common_9.UseGuards(jwt_auth_guard_2.JwtAuthGuard),
                    common_9.Delete(':id'),
                    __param(0, common_9.Param('id')),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", [String]),
                    __metadata("design:returntype", void 0)
                ], BooksController.prototype, "remove", null);
                BooksController = __decorate([
                    common_9.UseInterceptors(app_logging_interceptor_1.LoggingInterceptor),
                    common_9.UsePipes(app_validation_pipe_1.ValidationPipe),
                    common_9.UseFilters(http_exception_filter_1.HttpExceptionFilter),
                    common_9.Controller('books'),
                    __metadata("design:paramtypes", [books_service_1.BooksService])
                ], BooksController);
                return BooksController;
            }());
            exports_13("BooksController", BooksController);
        }
    };
});
System.register("books/books.module", ["@nestjs/common", "@nestjs/mongoose", "books/books.service", "books/books.controller", "schemas/book.schema"], function (exports_14, context_14) {
    "use strict";
    var common_10, mongoose_4, books_service_2, books_controller_1, book_schema_3, BooksModule;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (common_10_1) {
                common_10 = common_10_1;
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
            function (book_schema_3_1) {
                book_schema_3 = book_schema_3_1;
            }
        ],
        execute: function () {
            BooksModule = /** @class */ (function () {
                function BooksModule() {
                }
                BooksModule = __decorate([
                    common_10.Module({
                        imports: [mongoose_4.MongooseModule.forFeature([{ name: book_schema_3.Book.name, schema: book_schema_3.BookSchema }])],
                        controllers: [books_controller_1.BooksController],
                        providers: [books_service_2.BooksService]
                    })
                ], BooksModule);
                return BooksModule;
            }());
            exports_14("BooksModule", BooksModule);
        }
    };
});
System.register("auth/constants", [], function (exports_15, context_15) {
    "use strict";
    var jwtConstants;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [],
        execute: function () {
            exports_15("jwtConstants", jwtConstants = {
                secret: process.env.authSecret
            });
        }
    };
});
System.register("auth/jwt.strategy", ["passport-jwt", "@nestjs/passport", "@nestjs/common", "auth/auth.service", "auth/constants"], function (exports_16, context_16) {
    "use strict";
    var passport_jwt_1, passport_2, common_11, auth_service_2, constants_1, JwtStrategy;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (passport_jwt_1_1) {
                passport_jwt_1 = passport_jwt_1_1;
            },
            function (passport_2_1) {
                passport_2 = passport_2_1;
            },
            function (common_11_1) {
                common_11 = common_11_1;
            },
            function (auth_service_2_1) {
                auth_service_2 = auth_service_2_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            JwtStrategy = /** @class */ (function (_super) {
                __extends(JwtStrategy, _super);
                function JwtStrategy(authService) {
                    var _this = _super.call(this, {
                        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
                        secretOrKey: constants_1.jwtConstants.secret
                    }) || this;
                    _this.authService = authService;
                    return _this;
                }
                JwtStrategy.prototype.validate = function (payload) {
                    return __awaiter(this, void 0, void 0, function () {
                        var user;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.authService.validateUser(payload.id)];
                                case 1:
                                    user = _a.sent();
                                    if (!user) {
                                        throw new common_11.UnauthorizedException();
                                    }
                                    return [2 /*return*/, user];
                            }
                        });
                    });
                };
                JwtStrategy = __decorate([
                    common_11.Injectable(),
                    __metadata("design:paramtypes", [auth_service_2.AuthService])
                ], JwtStrategy);
                return JwtStrategy;
            }(passport_2.PassportStrategy(passport_jwt_1.Strategy)));
            exports_16("JwtStrategy", JwtStrategy);
        }
    };
});
System.register("auth/auth.module", ["@nestjs/common", "auth/auth.service", "auth/jwt.strategy", "@nestjs/passport", "@nestjs/jwt", "auth/constants"], function (exports_17, context_17) {
    "use strict";
    var common_12, auth_service_3, jwt_strategy_1, passport_3, jwt_2, constants_2, AuthModule;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (common_12_1) {
                common_12 = common_12_1;
            },
            function (auth_service_3_1) {
                auth_service_3 = auth_service_3_1;
            },
            function (jwt_strategy_1_1) {
                jwt_strategy_1 = jwt_strategy_1_1;
            },
            function (passport_3_1) {
                passport_3 = passport_3_1;
            },
            function (jwt_2_1) {
                jwt_2 = jwt_2_1;
            },
            function (constants_2_1) {
                constants_2 = constants_2_1;
            }
        ],
        execute: function () {
            AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                AuthModule = __decorate([
                    common_12.Module({
                        imports: [
                            passport_3.PassportModule,
                            jwt_2.JwtModule.register({
                                secret: constants_2.jwtConstants.secret,
                                signOptions: { expiresIn: '60s' },
                            }),
                        ],
                        providers: [auth_service_3.AuthService, jwt_strategy_1.JwtStrategy],
                        exports: [auth_service_3.AuthService],
                    })
                ], AuthModule);
                return AuthModule;
            }());
            exports_17("AuthModule", AuthModule);
        }
    };
});
System.register("app.module", ["@nestjs/common", "@nestjs/mongoose", "books/books.module", "@nestjs/config", "app.controller", "app.service", "auth/auth.module"], function (exports_18, context_18) {
    "use strict";
    var common_13, mongoose_5, books_module_1, config_1, app_controller_1, app_service_2, auth_module_1, AppModule;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (common_13_1) {
                common_13 = common_13_1;
            },
            function (mongoose_5_1) {
                mongoose_5 = mongoose_5_1;
            },
            function (books_module_1_1) {
                books_module_1 = books_module_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (app_controller_1_1) {
                app_controller_1 = app_controller_1_1;
            },
            function (app_service_2_1) {
                app_service_2 = app_service_2_1;
            },
            function (auth_module_1_1) {
                auth_module_1 = auth_module_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    common_13.Module({
                        imports: [config_1.ConfigModule.forRoot(), mongoose_5.MongooseModule.forRoot('mongodb://localhost/nest'), books_module_1.BooksModule, auth_module_1.AuthModule],
                        controllers: [app_controller_1.AppController],
                        providers: [app_service_2.AppService],
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_18("AppModule", AppModule);
        }
    };
});
System.register("book_repository", [], function (exports_19, context_19) {
    "use strict";
    var Book, BookRepository;
    var __moduleName = context_19 && context_19.id;
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
            exports_19("BookRepository", BookRepository);
        }
    };
});
System.register("container", ["reflect-metadata", "inversify", "book_repository"], function (exports_20, context_20) {
    "use strict";
    var inversify_1, book_repository_1, container;
    var __moduleName = context_20 && context_20.id;
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
            exports_20("container", container);
            container.bind(book_repository_1.BookRepository).toSelf();
        }
    };
});
