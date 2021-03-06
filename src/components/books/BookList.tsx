import {StyleSheet} from 'react-native';
import React, {Key} from 'react';
import {Layout, List, Text} from '@ui-kitten/components';
import {Book} from '../../types/books.type';
import BookListItem from './BookListItem';
import AddBookBtn from './AddBookBtn';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const BookList = ({
  authorsBooks,
  authorId,
}: {
  authorsBooks: Book[];
  authorId?: number;
}) => {
  const navigation = useNavigation();
  const renderItem = ({item, index}: {item: Book; index: Key}) => (
    <BookListItem book={item} key={index} />
  );

  const {t} = useTranslation();

  const goToAddBook = () => {
    navigation.navigate('BookCreadit', {authorId});
  };

  return (
    <Layout style={styles.root}>
      <Text category={'h5'} style={styles.title}>
        {t('author.books')}
      </Text>
      <Layout style={styles.listContainer} level={'2'}>
        <AddBookBtn onPress={goToAddBook} />

        <List
          data={authorsBooks}
          renderItem={renderItem}
          horizontal
          style={styles.list}
        />
      </Layout>
    </Layout>
  );
};

export default BookList;

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    marginBottom: 25,
  },
  listContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  list: {},
});
