import React from 'react';
import Login from './pages/Login.js';
import Account from './pages/Account.js';
import Register from './pages/Register.js';
import Welcome from './pages/Welcome.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      //  <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
      //  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
     // </Stack.Navigator>
 //   </NavigationContainer>
       // <Login /
       // <Account />
      //<Welcome />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
