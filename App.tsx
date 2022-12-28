import merge from 'deepmerge';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });
  const CombinedDarkTheme = merge(MD3DarkTheme, LightTheme);
  const CombinedDefaultTheme = merge(MD3LightTheme, DarkTheme);
  const theme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation theme={theme} />
          <StatusBar backgroundColor={theme.colors.surface} animated={true} />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
