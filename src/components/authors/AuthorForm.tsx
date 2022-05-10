import {StyleSheet} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Author} from '../../types/authors.type';
import {Input, Layout, Text} from '@ui-kitten/components';

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

  useEffect(() => {
    setIsValidAuthor(
      author.firstname !== '' &&
        author.lastname !== '' &&
        author.description !== '',
    );
  }, [author]);

  return (
    <Layout style={styles.root}>
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> First Name* :</Text>}
        value={author.firstname}
        onChangeText={text => {
          updateAuthor(text, 'firstname');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Last Name* :</Text>}
        value={author.lastname}
        onChangeText={text => {
          updateAuthor(text, 'lastname');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Description* :</Text>}
        value={author.description}
        multiline={true}
        numberOfLines={3}
        onChangeText={text => {
          updateAuthor(text, 'description');
        }}
      />
      <Input
        style={styles.inputs}
        label={evaProps => <Text {...evaProps}> Picture URL :</Text>}
        value={author.picUrl}
        placeholder="https://..."
        onChangeText={text => {
          updateAuthor(text, 'picUrl');
        }}
      />
    </Layout>
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
