import {Book} from '../types/books.type';

const {default: instance} = require('./helpers/instance');

export const getBooksByAuthorId = async (id: Number): Promise<Book[]> =>
  await instance.get(`/books?authorId=${id}`);
export const getBookById = async (id: Number): Promise<Book> =>
  await instance.get(`/books/${id}`);
