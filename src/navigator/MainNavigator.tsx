import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingAuthorsView from '../views/ListingAuthorsView';
import DetailedAuthorView from '../views/DetailedAuthorView';
import DetailedBookView from '../views/DetailedBookView';
import CreaditAuthorView from '../views/CreaditAuthorView';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AuthorsList">
      <Stack.Screen name="AuthorsList" component={ListingAuthorsView} />
      <Stack.Screen name="AuthorDetails" component={DetailedAuthorView} />
      <Stack.Screen name="AuthorCreadit" component={CreaditAuthorView} />
      <Stack.Screen name="BookDetails" component={DetailedBookView} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
