import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Start = () => {
  return (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.text}>Shop</Text>
            <Text style={styles.num}>2</Text>
            <Text style={styles.text}>Plate</Text>
        </View>
      <Image
        source={require('../assets/shop2platelogo.png')}
        style={styles.image}
      />
      <View style={styles.arrowContainer}>
        <Image
          source={require('../assets/arrow.png')}
          style={styles.arrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  text: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Inter', // Correction: Utilisation de fontFamily
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    bottom:-20,
  },
  num: {
    fontSize: 120,
    fontFamily: 'Junge', // Correction: Utilisation de fontFamily
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 50,
  },
  arrow: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Start;
