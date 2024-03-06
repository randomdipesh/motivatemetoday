import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalBottomTabNavigation} from './Tab';
import {Text} from '@gluestack-ui/themed';
const Stack = createNativeStackNavigator();
const Profile = () => {
  return <Text>Profile</Text>;
};
export const AppNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={GlobalBottomTabNavigation}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </>
  );
};
