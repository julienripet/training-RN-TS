import {Author} from '../types/authors.type';

const {default: instance} = require('./helpers/instance');

export const getAuthors = async (): Promise<Author[] | Error> =>
  await instance.get('/authors');
