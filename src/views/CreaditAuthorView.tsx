import {Alert, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {Icon, TopNavigationAction} from '@ui-kitten/components';
import AuthorForm from '../components/authors/AuthorForm';
import {postAuthor, putAuthor} from '../services/authors.service';
import {useNavigation} from '@react-navigation/native';

const CreaditAuthorView = ({route}) => {
  const navigation = useNavigation();

  const validateAuthor = async () => {
    try {
      const res = route.params.author
        ? await putAuthor({author, id: author.id})
        : await postAuthor(author);
      if (!res) {
        throw new Error('');
      }
      console.log('res :', JSON.stringify(res, null, 4));
      navigation.navigate('AuthorsList');
    } catch (error) {
      Alert.alert('An error has occurred');
    }
  };
  const [isValidAuthor, setIsValidAuthor] = useState(false);

  const [author, setAuthor] = useState(
    route.params.author
      ? route.params.author
      : {
          firstname: '',
          lastname: '',
          description: '',
          picUrl: '',
        },
  );

  return (
    <ScrollView style={styles.root}>
      <CustomTopNavigation
        title="Authors"
        goBackBtn={true}
        renderRightActions={
          <TopNavigationAction
            disabled={!isValidAuthor}
            icon={<Icon name="checkmark-square-outline" />}
            onPress={validateAuthor}
          />
        }
      />
      <AuthorForm
        setIsValidAuthor={setIsValidAuthor}
        author={author}
        setAuthor={setAuthor}
      />
    </ScrollView>
  );
};

export default CreaditAuthorView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
