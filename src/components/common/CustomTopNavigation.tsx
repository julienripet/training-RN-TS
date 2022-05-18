// import {StyleSheet} from 'react-native';
import React from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

const CustomTopNavigation = ({
  title,
  goBackBtn,
  renderRightActions,
}: {
  title: string;
  goBackBtn: Boolean;
  renderRightActions?: JSX.Element;
}) => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction
      icon={<Icon name="arrow-back" />}
      onPress={navigateBack}
    />
  );

  return (
    <TopNavigation
      title={title}
      alignment="center"
      accessoryLeft={goBackBtn && BackAction}
      accessoryRight={renderRightActions && renderRightActions}
    />
  );
};

export default CustomTopNavigation;

// const styles = StyleSheet.create({});
