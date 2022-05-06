import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import AuthorList from '../components/authors/AuthorList';
import {Card, Layout, Spinner, Text} from '@ui-kitten/components';
import {fetchAuthors} from '../store/slices/authorSlice';

const ListingAuthorsView = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Launched Version 0.1');
    setTimeout(() => {
      dispatch(fetchAuthors());
    }, 3500);
  }, [dispatch]);

  const authors = useAppSelector(state => state.author.list);
  const loadingAuthors = useAppSelector(state => state.author.loading);

  return (
    <Layout style={styles.background}>
      <Layout style={styles.body}>
        <Text>Hello World</Text>
        {loadingAuthors ? <Spinner /> : <AuthorList authors={authors} />}
      </Layout>
    </Layout>
  );
};

export default ListingAuthorsView;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  body: {
    padding: 10,
  },
});