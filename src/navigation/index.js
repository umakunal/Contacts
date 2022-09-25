import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <UserNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
