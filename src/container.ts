import "reflect-metadata";
import { Container } from "inversify";
import { BookRepository } from "./book_repository";


const container = new Container();

container.bind(BookRepository).toSelf();

export { container };

