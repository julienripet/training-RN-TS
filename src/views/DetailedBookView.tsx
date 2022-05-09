import {Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Layout, Spinner, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {fetchBookById} from '../store/slices/bookSlice';
import CustomTopNavigation from '../components/common/CustomTopNavigation';

const DetailedBookView = ({route}) => {
  const dispatch = useAppDispatch();
  const book = useAppSelector(state => state.book.detailedBook);
  const loading = useAppSelector(state => state.book.loading);

  useEffect(() => {
    dispatch(fetchBookById(route.params.id));
  }, []);

  if (book && !loading) {
    return (
      <>
        <CustomTopNavigation title={"Book's details"} goBackBtn={true} />
        <Layout style={styles.root}>
          <Image source={{uri: book?.coverPicUrl}} style={styles.coverPic} />
          <Text>{book.title}</Text>
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <CustomTopNavigation title={"Book's details"} goBackBtn={true} />
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
  },
  coverPic: {
    height: 120,
    width: 80,
  },
});
