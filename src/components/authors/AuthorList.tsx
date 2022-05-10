import {StyleSheet} from 'react-native';
import React, {Key} from 'react';
import {Author} from '../../types/authors.type';
import AuthorItem from './AuthorItem';
import {Layout, List, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

export default function AuthorList({authors}: {authors: Array<Author>}) {
  const renderItem = ({item, index}: {item: Author; index: Key}) => (
    <AuthorItem author={item} key={index} />
  );

  const {t} = useTranslation();

  return (
    <Layout style={styles.root}>
      {authors?.length > 0 ? (
        <List data={authors} renderItem={renderItem} />
      ) : (
        <Text>{t('authors.none')} </Text>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {},
});
