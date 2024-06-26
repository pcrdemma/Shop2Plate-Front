import React,  { useEffect, useRef  } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from '../components/welcomeStyle.js';


const Welcome = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }
    ).start();

    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  const handleScrollToEnd = () => {
    navigation.navigate('Login');  
  };

  return (
    <ScrollView contentContainerStyle={style.scrollViewContainer}>
      <View style={style.container}>
        <View style={style.innerContainer}>
          <Animated.Image style={[style.imageLogo, { opacity: fadeAnim }]} resizeMode="cover" source={require('../assets/Logo.png')} />
          <Animated.Image style={[style.imageTrolly, { opacity: fadeAnim }]} resizeMode="cover" source={require('../assets/trolly.png')} />
          <TouchableOpacity onPress={handleScrollToEnd} style={style.scrollIndicator}>
            <Image style={style.imageArrow} resizeMode="cover" source={require('../assets/arrow.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
}

export default Welcome; 