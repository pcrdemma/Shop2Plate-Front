import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = () => {
    return (
      <View style={styles.container}>
        <Text>Logfefe   in</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(132, 174, 78, 0.4)',
    },
  });

export default Login;