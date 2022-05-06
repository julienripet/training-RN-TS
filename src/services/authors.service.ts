import {Author} from '../types/authors.type';

const {default: instance} = require('./helpers/instance');

export const getAuthors = async (): Promise<Author[]> =>
  await instance.get('/authors');

export const getAuthorById = async (id: Number): Promise<Author> =>
  await instance.get(`/authors/${id}`);
