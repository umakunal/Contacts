import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import DrawerNavigator from './DrawerNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {/* <UserNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
