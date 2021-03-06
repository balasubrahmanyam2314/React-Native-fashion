import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from './src/components';
import {AuthenticationNavigator} from './src/Authentication';

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
