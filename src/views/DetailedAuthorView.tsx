import {ScrollView, StyleSheet} from 'react-native';
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
import {useTranslation} from 'react-i18next';

const DetailedAuthorView = ({route}) => {
  const detailedAuthor = useAppSelector(state => state.author.detailedAuthor);
  const loadingAuthor = useAppSelector(state => state.author.loading);
  const authorsBooks = useAppSelector(state => state.book.list);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {t} = useTranslation();

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
      <Layout style={styles.root}>
        <CustomTopNavigation
          title={t('common.details')}
          goBackBtn={true}
          renderRightActions={
            <TopNavigationAction
              icon={<Icon name="edit-outline" />}
              onPress={goToEditAuthor}
            />
          }
        />
        <ScrollView>
          <AuthorDetails detailedAuthor={detailedAuthor} />
          <BookList authorsBooks={authorsBooks} authorId={detailedAuthor.id} />
        </ScrollView>
      </Layout>
    );
  } else {
    return (
      <>
        <CustomTopNavigation title={t('common.details')} goBackBtn={true} />
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
