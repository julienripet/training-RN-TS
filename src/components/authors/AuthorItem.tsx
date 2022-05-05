import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Author} from '../../types/authors.type';
import {Card} from '@ui-kitten/components';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export default function AuthorItem({author}: {author: Author}) {
  const navigation = useNavigation();
  const goToAuthorPage = () => {
    navigation.navigate('AuthorDetails', {id: author.id});
  };

  return (
    <Card style={styles.root} onPress={goToAuthorPage}>
      <Text>
        {author.firstname} {author.lastname}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {},
});
