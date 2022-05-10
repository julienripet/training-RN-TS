import {Book} from '../types/books.type';

const {default: instance} = require('./helpers/instance');

export const getBooksByAuthorId = async (id: Number): Promise<Book[]> =>
  await instance.get(`/books?authorId=${id}`);
export const getBookById = async (id: Number): Promise<Book> =>
  await instance.get(`/books/${id}`);

export const postBook = async (book: Book): Promise<Book> =>
  await instance.post('/books', book);

export const putBook = async ({
  book,
  id,
}: {
  book: Book;
  id: number;
}): Promise<Book> => await instance.put(`/books/${id}`, book);

export const deleteBook = async (id: number): Promise<{}> =>
  await instance.delete(`/books/${id}`);
