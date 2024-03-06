import {Button, Text} from '@gluestack-ui/themed';
import {useAppThemeStore} from '../store/app';
import {Moon, Sun} from 'lucide-react-native'
export const ToggleTheme = () => {
  const {toggleTheme, appTheme} = useAppThemeStore();
  return (
    <Button variant="link" onPress={toggleTheme} marginRight={"$5"}>
      <Text>
        {appTheme === 'light' ? <Sun color={"orange"} /> : <Moon color={"white"}/> }
      </Text>
    </Button>
  );
};
