import {StyleSheet} from 'react-native';
import React, {Key} from 'react';
import {Layout, List, Text} from '@ui-kitten/components';
import {Book} from '../../types/books.type';
import BookListItem from './BookListItem';

const BookList = ({authorsBooks}: {authorsBooks: Book[]}) => {
  const renderItem = ({item, index}: {item: Book; index: Key}) => (
    <BookListItem book={item} key={index} />
  );

  return (
    <Layout style={styles.root}>
      <Text category={'h5'} style={styles.title}>
        Their Books:
      </Text>
      <List data={authorsBooks} renderItem={renderItem} horizontal />
    </Layout>
  );
};

export default BookList;

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
  title: {
    marginBottom: 25,
  },
});
