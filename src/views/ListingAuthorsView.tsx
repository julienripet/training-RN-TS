import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import AuthorList from '../components/authors/AuthorList';
import {
  Card,
  Icon,
  Layout,
  Spinner,
  Text,
  TopNavigationAction,
} from '@ui-kitten/components';
import {fetchAuthors} from '../store/slices/authorSlice';
import {fetchBooksByAuthorId} from '../store/slices/bookSlice';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {useNavigation} from '@react-navigation/native';

const ListingAuthorsView = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Launched Version 0.1');
    dispatch(fetchAuthors());
  }, [dispatch]);

  const authors = useAppSelector(state => state.author.list);
  const loadingAuthors = useAppSelector(state => state.author.loading);

  const goToAddAuthor = () => {
    navigation.navigate('AuthorCreadit', {author: undefined});
  };

  return (
    <>
      <CustomTopNavigation
        title="Authors"
        goBackBtn={false}
        renderRightActions={
          <TopNavigationAction
            icon={<Icon name="plus-square-outline" />}
            onPress={goToAddAuthor}
          />
        }
      />
      <Layout style={styles.background}>
        <Layout style={styles.body}>
          {loadingAuthors ? <Spinner /> : <AuthorList authors={authors} />}
        </Layout>
      </Layout>
    </>
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
