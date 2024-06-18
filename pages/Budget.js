import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/budgetStyle.js';
import AddDepense from './AddDepense';

const Budget = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleBackPress = () => {
        console.log('Bouton retour pressé');
    };

    const handleAddDepense = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const currentMonth = () => {
        const date = new Date();
        const month = date.toLocaleString('fr-FR', { month: 'long' });
        return month.charAt(0).toUpperCase() + month.slice(1); // Capitalise le premier caractère
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                <View style={style.backButtonContent}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={style.backButtonText}>Retour</Text>
                </View>
            </TouchableOpacity>
            <View style={style.title}>
                <Text style={style.titleBudget}>Budget course 💰</Text>
            </View>
            <View style={[style.containermonth, { flex: 1 }]}>
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
            <View style={[style.containerDepenseBudget, { flex: 6 }]}>
                <View style={style.containerButtonDepense}>
                    <TouchableOpacity onPress={handleAddDepense} style={style.addArticle}>
                        <View style={style.addArticleContent}>
                            <Text style={style.addArticleText}>Ajouter une dépense</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={style.containerDepensesEffectues}>
                        <Text style={style.depensesEffectues}>Dépenses effectuées</Text>
                    </View>
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <AddDepense onClose={handleCloseModal} />
            </Modal>
        </ScrollView>
    );
};

export default Budget;
