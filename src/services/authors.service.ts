import {Author} from '../types/authors.type';

const {default: instance} = require('./helpers/instance');

export const getAuthors = async (): Promise<Author[]> =>
  await instance.get('/authors');

export const getAuthorById = async (id: Number): Promise<Author> =>
  await instance.get(`/authors/${id}`);

export const postAuthor = async (author: Author): Promise<Author> =>
  await instance.post('/authors', author);

export const putAuthor = async ({
  author,
  id,
}: {
  author: Author;
  id: number;
}): Promise<Author> => await instance.put(`/authors/${id}`, author);

export const deleteAuthor = async (id: number): Promise<{}> =>
  await instance.delete(`/authors/${id}`);
