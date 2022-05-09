import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomTopNavigation from '../components/common/CustomTopNavigation';
import {Icon, TopNavigationAction} from '@ui-kitten/components';
import AuthorForm from '../components/authors/AuthorForm';

const CreaditAuthorView = ({route}) => {
  const validateAuthor = () => {
    console.log('test');
  };
  const [isValidAuthor, setIsValidAuthor] = useState(false);

  return (
    <>
      <CustomTopNavigation
        title="Authors"
        goBackBtn={false}
        renderRightActions={
          <TopNavigationAction
            disabled={!isValidAuthor}
            icon={<Icon name="checkmark-square-outline" />}
            onPress={validateAuthor}
          />
        }
      />
      <AuthorForm
        authorEdit={route.params.author}
        setIsValidAuthor={setIsValidAuthor}
      />
    </>
  );
};

export default CreaditAuthorView;

const styles = StyleSheet.create({});
