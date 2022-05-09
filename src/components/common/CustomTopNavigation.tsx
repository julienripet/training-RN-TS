import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const CustomTopNavigation = ({
  title,
  goBackBtn,
}: {
  title: String;
  goBackBtn: Boolean;
}) => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <TopNavigation
      title={title}
      alignment="center"
      accessoryLeft={goBackBtn ? BackAction : <></>}
    />
  );
};

export default CustomTopNavigation;

const styles = StyleSheet.create({});
