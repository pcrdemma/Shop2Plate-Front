// App.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Stock from './pages/Stock.js';
import Budget from './pages/Budget.js';
import AddStock from './pages/AddStock.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Stock" component={Stock} options={{ headerShown: false }} />
        <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
        <Stack.Screen name="AddStock" component={AddStock} options={{ headerShown: false, presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
