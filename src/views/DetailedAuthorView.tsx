import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Layout, List, Spinner, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {fetchAuthorById} from '../store/slices/authorSlice';
import AuthorDetails from '../components/authors/AuthorDetails';
import BookList from '../components/books/BookList';
import {fetchBooksByAuthorId} from '../store/slices/bookSlice';
import CustomTopNavigation from '../components/common/CustomTopNavigation';

const DetailedAuthorView = ({route}) => {
  const detailedAuthor = useAppSelector(state => state.author.detailedAuthor);
  const loadingAuthor = useAppSelector(state => state.author.loading);
  const authorsBooks = useAppSelector(state => state.book.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthorById(route.params.id));
    dispatch(fetchBooksByAuthorId(route.params.id));
  }, []);

  if (detailedAuthor && !loadingAuthor) {
    return (
      <Layout style={styles.root}>
        <CustomTopNavigation title="Details" goBackBtn={true}/>
        <AuthorDetails detailedAuthor={detailedAuthor} />
        <BookList authorsBooks={authorsBooks} />
      </Layout>
    );
  } else {
    return (
      <Layout style={styles.root}>
        <CustomTopNavigation title="Details" goBackBtn={true}/>
        <Spinner />
      </Layout>
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
