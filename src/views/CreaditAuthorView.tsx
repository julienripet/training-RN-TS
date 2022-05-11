import {Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {Button, Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import AuthorForm from '../components/authors/AuthorForm';
import {deleteAuthor, postAuthor, putAuthor} from '../services/authors.service';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const CreaditAuthorView = ({route}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [isEdit] = useState(!!route.params.author);

  const confirmAuthorDelete = () => {
    Alert.alert(
      t('author.confirmDelete.title'),
      t('author.confirmDelete.body'),
      [
        {
          text: t('author.confirmDelete.cancel'),
          style: 'cancel',
        },
        {
          text: t('author.confirmDelete.confirm'),
          style: 'destructive',
          onPress: sendDelete,
        },
      ],
    );
  };

  const sendDelete = async () => {
    try {
      let res = await deleteAuthor(author.id);
      if (!res) {
        throw new Error('noData');
      }
      navigation.navigate('AuthorsList');
    } catch (error) {
      Alert.alert(t('common.error'), error);
    }
  };

  const validateAuthor = async () => {
    try {
      const res = isEdit
        ? await putAuthor({author, id: author.id})
        : await postAuthor(author);
      if (!res) {
        throw new Error('');
      }
      console.log('res :', JSON.stringify(res, null, 4));
      navigation.navigate('AuthorsList');
    } catch (error) {
      Alert.alert(t('common.error'));
    }
  };
  const [isValidAuthor, setIsValidAuthor] = useState(false);

  const [author, setAuthor] = useState(
    isEdit
      ? route.params.author
      : {
          firstname: '',
          lastname: '',
          description: '',
          picUrl: '',
        },
  );

  return (
    <Layout style={styles.root}>
      <CustomTopNavigation
        title={t('author.authors')}
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

      {isEdit && (
        <Button
          style={styles.deleteBtn}
          status="danger"
          onPress={confirmAuthorDelete}>
          {t('author.delete')}
        </Button>
      )}
    </Layout>
  );
};

export default CreaditAuthorView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 20,
  },
  deleteBtn: {
    margin: 10,
  },
});
