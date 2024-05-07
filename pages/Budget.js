import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/budgetStyle.js';

const Budget = () => {
    const handleBackPress = () => {
        console.log('Return button pressed');
    };

    const currentMonth = () => {
        const date = new Date();
        const month = date.toLocaleString('fr-FR', { month: 'long' });
        return month.charAt(0).toUpperCase() + month.slice(1); // Capitalise le premier caractère
      };
      

    return (
        <ScrollView contentContainerStyle={style.container}>
            <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={style.backButtonText}>Retour</Text>
            </TouchableOpacity>
            <View style={style.title}>
                <Text style={style.titleBudget}>Budget course 💰</Text>
            </View>
                <View style={[style.containermonth,{ flex: 2}]}>
                    <Text style={style.month}>{currentMonth()}</Text>
                </View>
            <View style={[style.containerProgressionBar,{ flex: 3}]}>
                <View style={style.progressionbar}>
                    <Text style={style.depense}>200€</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Budget;
