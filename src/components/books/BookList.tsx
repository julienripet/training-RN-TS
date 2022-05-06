import {StyleSheet} from 'react-native';
import React, {Key} from 'react';
import {Layout, List} from '@ui-kitten/components';
import {Book} from '../../types/books.type';
import BookListItem from './BookListItem';

const BookList = ({authorsBooks}: {authorsBooks: Book[]}) => {
  const renderItem = ({item, index}: {item: Book; index: Key}) => (
    <BookListItem book={item} key={index} />
  );

  return (
    <Layout>
      <List data={authorsBooks} renderItem={renderItem} horizontal />
    </Layout>
  );
};

export default BookList;

const styles = StyleSheet.create({});
