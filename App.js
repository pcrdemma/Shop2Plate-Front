import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Stock from './pages/Stock';
import Budget from './pages/Budget';
import Account from './pages/Account';
import ShopingList from './pages/ShopingList';
import AddDepense from './pages/AddDepense';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Budget"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === 'Budget') {
              iconSource = focused
                ? require('./assets/moneyNav.png')
                : require('./assets/moneyNav.png');
            } else if (route.name === 'Stock') {
              iconSource = focused
                ? require('./assets/frigoNav.png')
                : require('./assets/frigoNav.png');
            } else if (route.name === 'ShopingList') {
              iconSource = focused
              ? require('./assets/panierNav.png')
              : require('./assets/panierNav.png');
            } else if (route.name === 'AddDepense') {
              iconSource = focused
                ? require('./assets/userNav.png')
                : require('./assets/userNav.png');
            }

            return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: 'transparent',
            elevation: 0, // for Android
            shadowOpacity: 0.3, // for iOS
          },
        })}
      >
        <Tab.Screen name="Budget" component={Budget} />
        <Tab.Screen name="Stock" component={Stock} />
        <Tab.Screen name="ShopingList" component={ShopingList} />
        <Tab.Screen name="AddDepense" component={AddDepense} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
