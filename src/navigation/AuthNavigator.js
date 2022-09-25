import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../constants/navigation';
import {Login, Register} from '../screens/';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.login}>
      <Stack.Screen name={NAVIGATION.login} component={Login} />
      <Stack.Screen name={NAVIGATION.register} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
