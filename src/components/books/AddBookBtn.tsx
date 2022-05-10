import {StyleSheet} from 'react-native';
import React from 'react';
import {Card, Icon} from '@ui-kitten/components';

const AddBookBtn = ({onPress}: {onPress: Function}) => {
  return (
    <Card
      style={styles.root}
      onPress={() => {
        onPress();
      }}>
      <Icon name="plus-outline" style={styles.icon} fill="#8F9BB3" />
    </Card>
  );
};

export default AddBookBtn;

const styles = StyleSheet.create({
  root: {
    flex: 0,
    marginLeft: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignContent: 'center',
    width: 110,
    minHeight: 120,
  },
  icon: {
    width: 26,
    height: 26,
    alignSelf: 'center',
  },
});
