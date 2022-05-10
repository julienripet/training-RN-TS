import {StyleSheet} from 'react-native';
import React from 'react';
import {Card, Icon} from '@ui-kitten/components';

const AddBookBtn = () => {
  return (
    <Card style={styles.root}>
      <Icon name="plus-outline" style={styles.icon} fill="#8F9BB3" />
    </Card>
  );
};

export default AddBookBtn;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginLeft: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: 100,
  },
  icon: {
    width: 26,
    height: 26,
    alignSelf: 'center',
  },
});
