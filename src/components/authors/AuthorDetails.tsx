import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {Author} from '../../types/authors.type';

const AuthorDetails = ({detailedAuthor}: {detailedAuthor: Author}) => {
  return (
    <Layout>
      <Layout style={styles.topContainer}>
        <Text category="h3">
          {detailedAuthor.firstname} {detailedAuthor.lastname}
        </Text>
        {detailedAuthor.picUrl && (
          <Image source={{uri: detailedAuthor.picUrl}} style={styles.pic} />
        )}
      </Layout>
      <Text category="c1">{detailedAuthor.description} </Text>
    </Layout>
  );
};

export default AuthorDetails;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  pic: {
    borderRadius: 5,
    width: 150,
    height: 200,
  },
});
