import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/budgetStyle.js';

const Budget = () => {
    const handleBackPress = () => {
        console.log('Return button pressed');
    };
    const handleAddArticle = () => {
        console.log('Return button pressed');
    };

    const currentMonth = () => {
        const date = new Date();
        const month = date.toLocaleString('fr-FR', { month: 'long' });
        return month.charAt(0).toUpperCase() + month.slice(1); // Capitalise le premier caractère
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.title}>
                <Text style={style.titleBudget}>Budget course 💰</Text>
            </View>
                <View style={[style.containermonth,{ flex: 1}]}>
                    <Text style={style.month}>{currentMonth()}</Text>
                    <View style={[style.containerProgressionBar]}>
                        <View style={style.progressionbar}>
                            <Text style={style.depense}>200€</Text>
                        </View>
                    </View>
                    <View style={style.containerPrice}>
                        <View style={style.containerZero}>
                            <Text style={style.price}>0€</Text>
                        </View>
                        <View style={style.containerBud}>
                            <Text style={style.price}>400€</Text>
                        </View>
                    </View>
                </View>
                <View style={[style.containerDepenseBudget, {flex: 6}]}>
                    <View style={style.containerButtonDepense}>
                        <View style={style.containerDepensesEffectues}>
                            <Text style={style.depensesEffectues}>Dépenses effectuées</Text>
                        </View>
                        <TouchableOpacity onPress={handleAddArticle} style={style.addArticle}>
                            <View style={style.addArticleContent}>
                                <Text style={style.addArticleText}>Ajouter une dépense</Text>
                            </View>
                        </TouchableOpacity> 
                    </View>
                    <View style={style.containerTemplate}>
                        <Text style={style.dateTemplateDepense}>21 juin</Text>
                        <View style={style.containerDepensesTemplate}>
                            <View style={style.containerMagasin}>
                                <Text style={style.magasin}>Carrefour</Text>
                            </View>
                            <View style={style.containerDepenseMagasin}>
                                <Text style={style.depenseMagasin}>- 197,61€</Text>
                            </View>
                        </View>
                    </View>
                </View>

        </ScrollView>
    );
};

export default Budget;
