import {Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {useNavigation} from '@react-navigation/native';
import {Book} from '../types/books.type';
import BookForm from '../components/books/BookForm';
import {postBook, putBook} from '../services/books.service';
import {useTranslation} from 'react-i18next';

const CreaditBookView = ({route}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const [isValidBook, setIsValidBook] = useState<Boolean>(false);

  const validateBook = async () => {
    try {
      const res = route.params.book
        ? await putBook({book, id: book.id})
        : await postBook(book);
      if (!res) {
        throw new Error('');
      }
      console.log('res :', JSON.stringify(res, null, 4));
      navigation.navigate('AuthorDetails', {id: route.params.authorId});
    } catch (error) {
      Alert.alert(t('common.error'));
    }
  };

  const [book, setBook] = useState<Book>(
    route.params.book
      ? route.params.book
      : {
          authorId: route.params.authorId,
          title: '',
          summary: '',
          year: '',
          coverPicUrl: '',
        },
  );

  return (
    <Layout style={styles.root}>
      <CustomTopNavigation
        title={t('book.new-book')}
        goBackBtn={true}
        renderRightActions={
          <TopNavigationAction
            disabled={!isValidBook}
            icon={<Icon name="checkmark-square-outline" />}
            onPress={validateBook}
          />
        }
      />

      <BookForm setIsValidBook={setIsValidBook} book={book} setBook={setBook} />
    </Layout>
  );
};

export default CreaditBookView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 20,
  },
});
