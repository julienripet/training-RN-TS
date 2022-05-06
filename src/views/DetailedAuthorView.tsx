import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Layout, Spinner, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import authorSlice, {fetchAuthorById} from '../store/slices/authorSlice';
import AuthorDetails from '../components/authors/AuthorDetails';

const DetailedAuthorView = ({route}) => {
  const detailedAuthor = useAppSelector(state => state.author.detailedAuthor);
  const loadingAuthor = useAppSelector(state => state.author.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthorById(route.params.id));
  }, []);

  if (detailedAuthor && !loadingAuthor) {
    return (
      <Layout style={styles.root}>
        <AuthorDetails detailedAuthor={detailedAuthor} />
      </Layout>
    );
  } else {
    return (
      <Layout style={styles.root}>
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
