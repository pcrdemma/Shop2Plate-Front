import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { style } from '../components/addStockStyle.js';
import { Ionicons } from '@expo/vector-icons';

const AddStock = () => {
    const handleBackPress = () => {
        console.log('Back button has been pressed');
    };

    const handleAddStock = () => {
        console.log('Add stock button has been pressed');
    };

    

    const [expirationDate, setExpirationDate] = useState('');

  const handleDateChange = (text) => {
    // Vérifiez si la longueur de la chaîne est inférieure ou égale à 8 caractères et si elle ne contient que des chiffres et '/'
    if (text.length <= 8 && /^[0-9/]*$/.test(text)) {
      setExpirationDate(text);
    }
  };

    return (
        <View style={style.container}>
            {/* Back button */}
            <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                <View style={style.backButtonContent}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={style.backButtonText}>Retour</Text>
                </View>
            </TouchableOpacity>

            {/* Page title */}
            <View style={style.pageTitleContainer}>
                <Text style={{ fontSize: 25, fontWeight: 'normal' }}>Ajout d'un article dans le stock</Text>
            </View>

            {/* Scan article */}
            <View style={style.scanArticleContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', color: '#888888' }}>Article scanné</Text>
            </View>

            {/* Card */}
            <View style={[style.card, style.dropShadow]}>
                <View>
                    <Text style={style.heading}>
                        Titre article
                    </Text>
                </View>
                <Text style = {style.text}>
                    Date de péremption : 
                    
                </Text > 
                <TextInput
                    style={style.input}
                    value={expirationDate}
                    onChangeText={handleDateChange}
                    placeholder=".../.../..."
                    maxLength={8}
                    keyboardType="numeric"
                />
                
                <Text style = {style.text}>
                    Date d'ouverture :
                </Text>
                {/* <TextInput
                    style={style.input}
                    value={expirationDate}
                    onChangeText={handleDateChange}
                    placeholder=".../.../..."
                    maxLength={8}
                    keyboardType="numeric"
                /> */}

                <Text style = {style.text}>
                    Durée de conservation après ouverture :
                </Text>
                {/* <TextInput
                    style={style.input}
                    value={expirationDate}
                    onChangeText={handleDateChange}
                    placeholder=".../.../..."
                    maxLength={8}
                    keyboardType="numeric"
                /> */}
                <TouchableOpacity style={style.button} onPress={handleAddStock}>
                        <Text style={style.buttonText}>Ajouter au stock</Text>
                    </TouchableOpacity>
            </View>
        </View >
    );
}

export default AddStock;
