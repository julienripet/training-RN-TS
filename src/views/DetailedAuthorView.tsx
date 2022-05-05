import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';

const DetailedAuthorView = ({route}) => {
  return (
    <Layout>
      <Text>{route.params.id}</Text>
    </Layout>
  );
};

export default DetailedAuthorView;

const styles = StyleSheet.create({});
