import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { style } from '../components/addStockStyle.js';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker';

const AddStock = () => {
    const handleBackPress = () => {
        console.log('Back button has been pressed');
    };

    const [expirationDate, setExpirationDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (date) => {
        setExpirationDate(date);
        setShowDatePicker(false);
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
            <View style={style.cardContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 20 }}>Titre article</Text>

                <Text style={{ fontSize: 15, fontWeight: 'normal', marginBottom: 5 }}>Date de péremption :</Text>
                
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                    <Text>{expirationDate.toDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DatePicker
                        date={expirationDate}
                        onDateChange={handleDateChange}
                        mode="date"
                        textColor="#333" // Optionnel : couleur du texte dans le calendrier
                    />
                )}
                <Text style={{ fontSize: 15, fontWeight: 'normal', marginBottom: 5 }}>Date d'ouverture : </Text>
                <Text style={{ fontSize: 15, fontWeight: 'normal', marginBottom: 5 }}>Durée de conservation après ouverture : </Text>

            </View>

        </View>
    );
}

export default AddStock;
