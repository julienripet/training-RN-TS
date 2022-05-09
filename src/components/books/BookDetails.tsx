import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {Book} from '../../types/books.type';

const BookDetails = ({book}: {book: Book}) => {
  return (
    <Layout>
      <Layout style={styles.topContainer}>
        <Text category="h3">{book.title}</Text>
        <Image source={{uri: book.coverPicUrl}} style={styles.coverPic} />
      </Layout>
      <Text category="c1">{book.summary} </Text>
    </Layout>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  coverPic: {
    borderRadius: 5,
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
});
