import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalState} from '../context/provider';

const MainNavigator = () => {
  const {
    authState: {isLoggedIn},
  } = GlobalState();
  // console.log('GlobalData', GlobalData);
  // console.log('authState', authState);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
