import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { style } from '../components/budgetStyle.js';
import AddDepense from './AddDepense';

const Budget = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [depenses, setDepenses] = useState([
        {
            id: 1,
            name: 'Carrefour',
            price : -197.61,
            date: '21/06/2024'
        }
    ]);

    const handleDelete = (id) => {
        setDepenses(prevDepenses =>
            prevDepenses.filter(depense => depense.id !== id)
        );
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
                <View style={[style.containerDepenseBudget, { flex: 6 }]}>
                    <View style={style.containerButtonDepense}>
                        <View style={style.containerDepensesEffectues}>
                            <Text style={style.depensesEffectues}>Dépenses effectuées</Text>
                        </View>
                        <TouchableOpacity onPress={handleAddDepense} style={style.addArticle}>
                            <View style={style.addArticleContent}>
                                <Text style={style.addArticleText}>Ajouter une dépense</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                {depenses.map((depense) => (
                    <View style={style.containerTemplate}>
                        <Text style={style.dateTemplateDepense}>{depense.date}</Text>
                        <View style={style.containerDepensesTemplate}>
                            <View style={style.containerMagasin}>
                                <Text style={style.magasin}>{depense.name}</Text>
                            </View>
                            <View style={style.containerDepenseMagasin}>
                                <View style={style.containerDeleteButton}>
                                    <TouchableOpacity onPress={() => handleDelete(depense.id)} style={style.deleteButton}>
                                        <Image
                                            source={require('../assets/croix.png')}
                                            style={style.image}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={style.depenseMagasin}>{depense.price}</Text>
                            </View>
                        </View>
                    </View>
                ))}
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <AddDepense
                    onClose={handleCloseModal}
                    onAddDepense={handleAddDepense}
                />
            </Modal>
        </ScrollView>
    );
};

export default Budget;