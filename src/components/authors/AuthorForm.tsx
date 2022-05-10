import {ScrollView, StyleSheet} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Author} from '../../types/authors.type';
import {Input, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';

const AuthorForm = ({
  setIsValidAuthor,
  author,
  setAuthor,
}: {
  setIsValidAuthor: Function;
  author: Author;
  setAuthor: Dispatch<SetStateAction<Author>>;
}) => {
  const updateAuthor = (text: string, field: string) => {
    setAuthor({...author, [field]: text});
  };

  const {t} = useTranslation();

  useEffect(() => {
    setIsValidAuthor(
      author.firstname !== '' &&
        author.lastname !== '' &&
        author.description !== '',
    );
  }, [author, setIsValidAuthor]);

  return (
    <ScrollView style={styles.root}>
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> {t('author.firstname')}</Text>}
        value={author.firstname}
        onChangeText={text => {
          updateAuthor(text, 'firstname');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> {t('author.lastname')}</Text>}
        value={author.lastname}
        onChangeText={text => {
          updateAuthor(text, 'lastname');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => (
          <Text {...evaProps}> {t('author.description')}</Text>
        )}
        value={author.description}
        multiline={true}
        numberOfLines={3}
        onChangeText={text => {
          updateAuthor(text, 'description');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => (
          <Text {...evaProps}> {t('author.picture-url')}</Text>
        )}
        value={author.picUrl}
        placeholder="https://..."
        onChangeText={text => {
          updateAuthor(text, 'picUrl');
        }}
      />
    </ScrollView>
  );
};

export default AuthorForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  inputs: {marginVertical: 10},
});
