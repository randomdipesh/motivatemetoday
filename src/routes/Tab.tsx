import {Text} from '@gluestack-ui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {QuoteActionSheet} from '../components/QuoteActionSheet';
import {Favourites} from '../screens/Favourites';
import {ToggleTheme} from '../components/ToggleTheme';
import {HomeIcon, HeartIcon} from 'lucide-react-native';
import {useAppThemeStore} from '../store/app';

const Tab = createBottomTabNavigator();

export const GlobalBottomTabNavigation = () => {
  const {appTheme} = useAppThemeStore();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerRight: ToggleTheme,
          tabBarActiveTintColor: appTheme === 'dark' ? 'white' : 'black',
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({color}) => <HomeIcon color={color} />,
          }}
          name="AppHome"
          component={Home}
        />
        <Tab.Screen
          options={{
            title: 'Favourites',
            tabBarIcon: ({focused, color}) => (
              <HeartIcon
                fill={focused ? 'red' : 'none'}
                color={focused ? 'red' : color}
              />
            ),
          }}
          name="Favourites"
          component={Favourites}
        />
      </Tab.Navigator>
      <QuoteActionSheet />
    </>
  );
};
