import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Author} from '../../types/authors.type';
import {Avatar, Card, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

export default function AuthorItem({author}: {author: Author}) {
  const navigation = useNavigation();
  const goToAuthorPage = () => {
    navigation.navigate('AuthorDetails', {id: author.id});
  };

  return (
    <Card style={styles.root} onPress={goToAuthorPage}>
      <View style={styles.container}>
        {author.picUrl ? <Avatar source={{uri: author.picUrl}} /> : <></>}
        <Text style={styles.name}>
          {author.firstname} {author.lastname}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 0,
    marginVertical: 5,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    marginLeft: 10,
  },
});
