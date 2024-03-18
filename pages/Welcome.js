import React from 'react';
import { View, Image } from 'react-native';
import {style} from '../components/style.js';

const Welcome = () => {
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Image style={style.imageLogo} resizeMode="cover" source={require('../assets/Logo.png')} />
        <Image style={style.imageTrolly} resizeMode="cover" source={require('../assets/trolly.png')} />
        <Image style={style.imageArrow} resizeMode="cover" source={require('../assets/arrow.png')} />
      </View>
    </View>
    
  );
}

export default Welcome; 