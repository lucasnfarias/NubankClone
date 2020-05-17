import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: '#8B10AE' },
    }}
  >
    <App.Screen name="Main" component={Main} />
  </App.Navigator>
);

export default AppRoutes;
