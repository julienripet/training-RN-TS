import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Book} from '../../types/books.type';
import {Input} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

const BookForm = ({
  setIsValidBook,
  book,
  setBook,
}: {
  setIsValidBook: Dispatch<SetStateAction<Boolean>>;
  book: Book;
  setBook: Dispatch<SetStateAction<Book>>;
}) => {
  const updateBook = (text: string, field: string) => {
    setBook({...book, [field]: text});
  };

  const {t} = useTranslation();

  useEffect(() => {
    setIsValidBook(
      book.title !== '' && book.summary !== '' && book.coverPicUrl !== '',
    );
  }, [book, setIsValidBook]);

  return (
    <ScrollView style={styles.root}>
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> {t('book.title')}</Text>}
        value={book.title}
        onChangeText={text => {
          updateBook(text, 'title');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> {t('book.summary')}</Text>}
        value={book.summary}
        multiline={true}
        numberOfLines={3}
        onChangeText={text => {
          updateBook(text, 'summary');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => (
          <Text {...evaProps}> {t('book.cover-picture-url')}</Text>
        )}
        value={book.coverPicUrl}
        placeholder="https://..."
        onChangeText={text => {
          updateBook(text, 'coverPicUrl');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> {t('book.year')}</Text>}
        value={book.year}
        onChangeText={text => {
          updateBook(text, 'year');
        }}
      />
    </ScrollView>
  );
};

export default BookForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  inputs: {marginVertical: 10},
});
