import {RefreshControl, StyleSheet} from 'react-native';
import React, {Key} from 'react';
import {Author} from '../../types/authors.type';
import AuthorItem from './AuthorItem';
import {Layout, List, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

export default function AuthorList({
  authors,
  loadAuthors,
  loadingAuthors,
}: {
  authors: Array<Author>;
  loadAuthors: () => void;
  loadingAuthors: boolean;
}) {
  const renderItem = ({item, index}: {item: Author; index: Key}) => (
    <AuthorItem author={item} key={index} />
  );

  const {t} = useTranslation();

  return (
    <Layout style={styles.root}>
      <List
        refreshControl={
          <RefreshControl refreshing={loadingAuthors} onRefresh={loadAuthors} />
        }
        data={authors}
        renderItem={renderItem}
        ListEmptyComponent={<Text>{t('author.none')} </Text>}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {},
});
