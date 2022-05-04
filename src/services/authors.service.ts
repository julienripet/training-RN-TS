import {Author} from '../types/authors.type';

const {default: instance} = require('./helpers/instance');

export const getAuthors = async (): Promise<Author[]> =>
  await instance.get('/authors');
