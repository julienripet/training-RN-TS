import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const BackIcon = () => <Icon name="arrow-back" />;

const CustomTopNavigation = ({
  title,
  goBackBtn,
  renderRightActions,
}: {
  title: String;
  goBackBtn: Boolean | undefined;
  renderRightActions?: JSX.Element | undefined;
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
      accessoryRight={renderRightActions ? renderRightActions : <></>}
    />
  );
};

export default CustomTopNavigation;

const styles = StyleSheet.create({});
