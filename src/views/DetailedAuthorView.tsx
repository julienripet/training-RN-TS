import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {
  Icon,
  Layout,
  Spinner,
  TopNavigationAction,
} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {fetchAuthorById} from '../store/slices/authorSlice';
import AuthorDetails from '../components/authors/AuthorDetails';
import BookList from '../components/books/BookList';
import {fetchBooksByAuthorId} from '../store/slices/bookSlice';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const DetailedAuthorView = ({route}) => {
  const detailedAuthor = useAppSelector(state => state.author.detailedAuthor);
  const loadingAuthor = useAppSelector(state => state.author.loading);
  const authorsBooks = useAppSelector(state => state.book.list);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchAuthorById(route.params.id));
      dispatch(fetchBooksByAuthorId(route.params.id));
    }, [dispatch, route.params.id]),
  );

  const goToEditAuthor = () => {
    navigation.navigate('AuthorCreadit', {author: detailedAuthor});
  };

  if (detailedAuthor && !loadingAuthor) {
    return (
      <>
        <CustomTopNavigation
          title="Details"
          goBackBtn={true}
          renderRightActions={
            <TopNavigationAction
              icon={<Icon name="edit-outline" />}
              onPress={goToEditAuthor}
            />
          }
        />
        <Layout style={styles.root}>
          <AuthorDetails detailedAuthor={detailedAuthor} />
          <BookList authorsBooks={authorsBooks} />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <CustomTopNavigation title="Details" goBackBtn={true} />
        <Layout style={styles.root}>
          <Spinner />
        </Layout>
      </>
    );
  }
};

export default DetailedAuthorView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
  },
});
