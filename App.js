// App.js
import React from 'react';
import Stock from './pages/Stock.js'
import Budget from './pages/Budget.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
//import Account from './pages/Account.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Stock" component={Stock} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />*/}
        {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
