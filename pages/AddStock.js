import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { style } from '../components/addStockStyle.js';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddStock = () => {
    const handleBackPress = () => {
        console.log('Back button has been pressed');
    };

    const handleAddStock = () => {
        console.log('Add stock button has been pressed');
    };

    const [expirationDate, setExpirationDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false); // Fermer le sélecteur de date après avoir sélectionné une date
        if (selectedDate) {
            setExpirationDate(selectedDate);
        }
    };

    const formatDate = (date) => {
        if (!date) return '.../.../...';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
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
                <Text style={style.text}>
                    Date de péremption :
                </Text>
                {showDatePicker && (
                    <DateTimePicker
                        value={expirationDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
                <TouchableOpacity style={style.buttonDate} onPress={() => setShowDatePicker(true)}>
                    <Text style={style.buttonDateText}>{formatDate(expirationDate)}</Text>
                </TouchableOpacity>

                <Text style={style.text}>
                    Date d'ouverture :
                </Text>

                <Text style={style.text}>
                    Durée de conservation après ouverture :
                </Text>

                <TouchableOpacity style={style.button} onPress={handleAddStock}>
                    <Text style={style.buttonText}>Ajouter au stock</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddStock;
