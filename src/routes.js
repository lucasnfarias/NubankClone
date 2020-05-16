import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Main" component={Main} />
  </App.Navigator>
);

export default AppRoutes;
