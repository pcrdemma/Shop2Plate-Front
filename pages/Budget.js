import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { style } from '../components/budgetStyle.js';
import AddDepense from './AddDepense';

const Budget = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [depenses, setDepenses] = useState([]);

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

    const handleAddNewDepense = (newDepense) => {
        setDepenses(prevDepenses => [
            ...prevDepenses,
            { ...newDepense, id: prevDepenses.length + 1 }
        ]);
        handleCloseModal();
    };

    const currentMonth = () => {
        const date = new Date();
        const month = date.toLocaleString('fr-FR', { month: 'long' });
        return month.charAt(0).toUpperCase() + month.slice(1); // Capitalise le premier caractère
    };

    const totalBudget = 400; // Exemple de budget total
    const totalSpent = depenses.reduce((sum, depense) => sum + depense.price, 0);
    const progressPercentage = (totalSpent / totalBudget) * 100;

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.title}>
                <Text style={style.titleBudget}>Budget course 💰</Text>
            </View>
            <View style={[style.containermonth, { flex: 1 }]}>
                <Text style={style.month}>{currentMonth()}</Text>
                <View style={style.progresseBarContent}>
                    <View
                        style={[
                            style.progress,
                            {
                                width: `${progressPercentage}%`,
                                backgroundColor: `rgba(132, 174, 78, ${progressPercentage / 100})`,
                            },
                        ]}
                    />
                    <Text style={style.listCuranteNumber}>{totalSpent.toFixed(2)}€</Text>
                    <Text style={style.listNumber}>{totalBudget}€</Text>
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
                    <View key={depense.id} style={style.containerTemplate}>
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
                                <Text style={style.depenseMagasin}>{depense.price}€</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <AddDepense
                    onClose={handleCloseModal}
                    onAddDepense={handleAddNewDepense}
                />
            </Modal>
        </ScrollView>
    );
};

export default Budget;
