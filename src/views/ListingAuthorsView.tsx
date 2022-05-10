import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import AuthorList from '../components/authors/AuthorList';
import {
  Icon,
  Layout,
  Spinner,
  TopNavigationAction,
} from '@ui-kitten/components';
import {fetchAuthors} from '../store/slices/authorSlice';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const ListingAuthorsView = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {t} = useTranslation();

  useFocusEffect(
    useCallback(() => {
      console.log('Launched Version 0.1');
      dispatch(fetchAuthors());
    }, [dispatch]),
  );

  const authors = useAppSelector(state => state.author.list);
  const loadingAuthors = useAppSelector(state => state.author.loading);

  const goToAddAuthor = () => {
    navigation.navigate('AuthorCreadit', {author: undefined});
  };

  return (
    <>
      <CustomTopNavigation
        title={t('author.authors')}
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
