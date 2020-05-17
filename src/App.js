import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AppRoutes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#8B10AE" barStyle="light-content" />
      <AppRoutes />
    </NavigationContainer>
  );
};

export default App;
