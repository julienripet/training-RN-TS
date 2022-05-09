import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from 'react-native';
import React, {Dispatch, useEffect, useState} from 'react';
import {Author} from '../../types/authors.type';
import {Input, Layout, Text} from '@ui-kitten/components';

const AuthorForm = ({
  authorEdit,
  setIsValidAuthor,
}: {
  authorEdit: Author | undefined;
  setIsValidAuthor: Function;
}) => {
  const [author, setAuthor]: [
    author: Author,
    setAuthor: Dispatch<React.SetStateAction<Author>>,
  ] = useState(
    authorEdit
      ? authorEdit
      : {
          firstname: '',
          lastname: '',
          description: '',
          picUrl: '',
        },
  );

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
    <Layout>
      <Input
        label={evaProps => <Text {...evaProps}> First Name* :</Text>}
        value={author.firstname}
        onChangeText={text => {
          updateAuthor(text, 'firstname');
        }}
      />
      <Input
        label={evaProps => <Text {...evaProps}> Last Name* :</Text>}
        value={author.lastname}
        onChangeText={text => {
          updateAuthor(text, 'lastname');
        }}
      />
      <Input
        label={evaProps => <Text {...evaProps}> Description* :</Text>}
        value={author.description}
        multiline={true}
        numberOfLines={3}
        onChangeText={text => {
          updateAuthor(text, 'description');
        }}
      />
      <Input
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

const styles = StyleSheet.create({});
