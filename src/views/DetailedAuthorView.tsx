import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Layout, Spinner, Text} from '@ui-kitten/components';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {fetchAuthorById} from '../store/slices/authorSlice';

const DetailedAuthorView = ({route}) => {
  const detailedAuthor = useAppSelector(state => state.author.detailedAuthor);
  const loadingAuthor = useAppSelector(state => state.author.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthorById(route.params.id));
  }, []);

  if (detailedAuthor && !loadingAuthor) {
    return (
      <Layout>
        <Text category="h1">
          {detailedAuthor.firstname} {detailedAuthor.lastname}
        </Text>
        <Text category="c1">{detailedAuthor.description} </Text>
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

export default DetailedAuthorView;

const styles = StyleSheet.create({});
