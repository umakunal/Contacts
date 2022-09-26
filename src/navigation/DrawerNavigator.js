import {createDrawerNavigator} from '@react-navigation/drawer';
import {NAVIGATION} from '../constants/navigation';
import UserNavigator from './UserNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name={NAVIGATION.homeNavigator}
        component={UserNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
