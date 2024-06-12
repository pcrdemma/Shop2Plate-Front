// App.js
import React from 'react';



import Stock from './pages/Stock.js'
import Budget from './pages/Budget.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Account from './pages/Account.js';
import AddStock from './pages/AddStock.js';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 

        {/* <Stack.Screen name="Stock" component={Stock} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/> */}

{/*      <Stack.Navigator mode="modal">
         <Stack.Screen name="Stock" component={Stock} options={{ headerShown: false }} />
         <Stack.Screen name="Budget" component={Budget} options={{ headerShown: false }} />
         <Stack.Screen name="AddStock" component={AddStock} options={{ headerShown: false, presentation: 'modal' }} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
