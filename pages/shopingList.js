import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { style } from '../components/shopingListeStyle.js';

const ShopingList = () => {
    const [curenteNumber, setCurenteNumber] = useState(8);
    const itemInListe = 10;

    const handleBackPress = () => {
        console.log('Back button has been pressed');
    };

    const handleIncrement = () => {
        if (curenteNumber < itemInListe) {
            setCurenteNumber(curenteNumber + 1);
        }
    };

    const progressPercentage = (curenteNumber / itemInListe);

    return (
        <View style={style.container}>
            <View style={style.backButtonScare}>
                <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                    <View style={style.backButtonContent}>
                        <Image style={style.imageLogo} resizeMode="cover" source={require('../assets/backArrow.png')} />
                        <Text style={style.backButtonText}>Retour</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={style.innerContainer}>
                <View style={style.shopingListContainerTitle}>
                    <Text>Shopping List</Text>
                    <Image style={style.imageTrolly} resizeMode="cover" source={require('../assets/trolly.png')} />
                </View>
                <View style={style.titleList}>
                    <Text>Vous avez dans votre cadie {curenteNumber} article sur {itemInListe}.</Text>
                </View>
                <View style={style.progresseBarContent}>
                    <View
                        style={[
                            styles.progress,
                            {
                                width: `${progressPercentage * 100}%`,
                                backgroundColor: `rgba(132, 174, 78, ${progressPercentage})`,
                                
                            },
                        ]}
                        />
                        <Text style={style.listCuranteNumber}>{curenteNumber}</Text>
                        <Text style={style.listNumber}>{itemInListe}</Text>
                </View>
                <TouchableOpacity onPress={handleIncrement}>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    progress: {
        height: '100%',
        width: '50%',
        borderRadius: 10,
        position: 'absolute', 
    },
});

export default ShopingList;
