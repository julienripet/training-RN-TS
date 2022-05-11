import {Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {useNavigation} from '@react-navigation/native';
import {Book} from '../types/books.type';
import BookForm from '../components/books/BookForm';
import {deleteBook, postBook, putBook} from '../services/books.service';
import {useTranslation} from 'react-i18next';

const CreaditBookView = ({route}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const [isEdit] = useState(!!route.params.book);

  const [isValidBook, setIsValidBook] = useState<Boolean>(false);

  const validateBook = async () => {
    try {
      const res = isEdit
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

  const confirmBookDelete = () => {
    Alert.alert(t('book.confirmDelete.title'), t('book.confirmDelete.body'), [
      {
        text: t('book.confirmDelete.cancel'),
        style: 'cancel',
      },
      {
        text: t('book.confirmDelete.confirm'),
        style: 'destructive',
        onPress: sendDelete,
      },
    ]);
  };

  const sendDelete = async () => {
    try {
      let res = await deleteBook(book.id);
      if (!res) {
        throw new Error('noData');
      }
      navigation.navigate('AuthorDetails', {id: route.params.authorId});
    } catch (error) {
      Alert.alert(t('common.error'), error);
    }
  };

  const [book, setBook] = useState<Book>(
    isEdit
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
      {isEdit && (
        <Button
          onPress={confirmBookDelete}
          style={styles.deleteBtn}
          status="danger">
          {t('book.delete')}
        </Button>
      )}
    </Layout>
  );
};

export default CreaditBookView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 20,
  },
  deleteBtn: {
    margin: 10,
  },
});
