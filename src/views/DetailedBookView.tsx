import {Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Layout, Spinner, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {fetchBookById} from '../store/slices/bookSlice';

const DetailedBookView = ({route}) => {
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.book.detailedBook);
  const loading = useAppSelector(state => state.book.loading);

  useEffect(() => {
    dispatch(fetchBookById(route.params.id));
  }, []);

  if (book && !loading) {
    return (
      <Layout>
        <Image source={{uri: book?.coverPicUrl}} style={styles.coverPic} />
        <Text>{book.title}</Text>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
};

export default DetailedBookView;

const styles = StyleSheet.create({
  coverPic: {
    height: 120,
    width: 80,
  },
});
