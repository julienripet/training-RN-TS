import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import {Book} from '../../types/books.type';
import {useNavigation} from '@react-navigation/native';

const BookListItem = ({book}: {book: Book}) => {
  const navigation = useNavigation();

  const goToBookPage = () => {
    navigation.navigate('BookDetails', {id: book.id});
  };
  return (
    <Card onPress={goToBookPage}>
      <Image source={{uri: book.coverPicUrl}} style={styles.coverPic} />
      <Text>{book.title}</Text>
    </Card>
  );
};

export default BookListItem;

const styles = StyleSheet.create({
  coverPic: {
    height: 120,
    width: 80,
  },
});