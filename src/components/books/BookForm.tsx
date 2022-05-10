import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Book} from '../../types/books.type';
import {Input} from '@ui-kitten/components';

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

  useEffect(() => {
    setIsValidBook(
      book.title !== '' && book.summary !== '' && book.coverPicUrl !== '',
    );
  }, [book, setIsValidBook]);

  return (
    <ScrollView style={styles.root}>
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Title* :</Text>}
        value={book.title}
        onChangeText={text => {
          updateBook(text, 'title');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Summary* :</Text>}
        value={book.summary}
        multiline={true}
        numberOfLines={3}
        onChangeText={text => {
          updateBook(text, 'summary');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Cover Picture's URL* :</Text>}
        value={book.coverPicUrl}
        placeholder="https://..."
        onChangeText={text => {
          updateBook(text, 'coverPicUrl');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Year of writing:</Text>}
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
