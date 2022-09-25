import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../constants/navigation';
import {Contacts, ContactsDetails, ContactsList, Settings} from '../screens/';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.contacts}>
      <Stack.Screen name={NAVIGATION.contacts} component={Contacts} />
      <Stack.Screen
        name={NAVIGATION.contactsDetails}
        component={ContactsDetails}
      />
      <Stack.Screen name={NAVIGATION.contactsList} component={ContactsList} />
      <Stack.Screen name={NAVIGATION.settings} component={Settings} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
