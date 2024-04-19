import React from 'react';
import { View } from 'react-native';
import Login from './pages/Login.js';
import Start from './pages/satrtingPage.js';
import { useFonts } from 'expo-font';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Start />
    </View>
  );
};

export default App;
