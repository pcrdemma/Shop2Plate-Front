import React from 'react';
import { View } from 'react-native';
import Start from './pages/satrtingPage.js';
import Login from './pages/Login.js';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
};

export default App;
