import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {
  Icon,
  Layout,
  Spinner,
  TopNavigationAction,
} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {fetchBookById} from '../store/slices/bookSlice';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import BookDetails from '../components/books/BookDetails';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const DetailedBookView = ({route}) => {
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.book.detailedBook);
  const loading = useAppSelector(state => state.book.loading);
  const navigation = useNavigation();
  const {t} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchBookById(route.params.id));
    }, [dispatch, route.params.id]),
  );

  const goToEditBook = () => {
    navigation.navigate('BookCreadit', {book: book, authorId: book.authorId});
  };

  if (book && !loading) {
    return (
      <Layout style={styles.root}>
        <CustomTopNavigation
          title={t('book.details')}
          goBackBtn={true}
          renderRightActions={
            <TopNavigationAction
              icon={<Icon name="edit-outline" />}
              onPress={goToEditBook}
            />
          }
        />
        <BookDetails book={book} />
      </Layout>
    );
  } else {
    return (
      <>
        <CustomTopNavigation title={t('book.details')} goBackBtn={true} />
        <Layout style={styles.root}>
          <Spinner />
        </Layout>
      </>
    );
  }
};

export default DetailedBookView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  coverPic: {
    height: 120,
    width: 80,
  },
});
