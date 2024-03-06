import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {AppNavigation} from './src/routes/Stack';
import Toast from 'react-native-toast-message';
import {useAppThemeStore} from './src/store/app';

const App = () => {
  const {appTheme} = useAppThemeStore();
  return (
    <>
      <NavigationContainer
        theme={appTheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GluestackUIProvider config={config} colorMode={appTheme}>
          <AppNavigation />
        </GluestackUIProvider>
      </NavigationContainer>
      <Toast topOffset={70} visibilityTime={1500} />
    </>
  );
};
export default App;
