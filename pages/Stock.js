import React from 'react';
import { View, Text, Image,KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/stockStyle.js';

const Stock = () => {
    const handleBackPress = () => {
        console.log('Return button pressed');
    };
    const handleMoinsPress = () => {
        console.log('Moins button pressed');
    };
    const handlePlusPress = () => {
        console.log('Plus button pressed');
    };
    const handleAddArticle = () => {
        console.log('Add article button pressed');
    };
    const handleDelete = () => {
        console.log('Delete article button pressed');
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
                <Text style={style.titleBudget}>Stock de course 🛒</Text>
            </View>
                <View style={[style.containermonth,{ flex: 1}]}>
                    <Text style={style.articleScan}>Articles ajoutées</Text>
                    <View style={[style.containerProgressionBar]}>
                        <View style={style.progressionbar}>
                            <Text style={style.depense}>4</Text>
                        </View>
                    </View>
                    <View style={style.containerPrice}>
                        <View style={style.containerZero}>
                            <Text style={style.unite}>0</Text>
                        </View>
                    </View>
                </View>
                <View style={[style.containerDepenseBudget, {flex: 6}]}>
                    <View style={style.containerButtonDepense}>
                        <TouchableOpacity onPress={handleAddArticle} style={style.addArticle}>
                            <View style={style.addArticleContent}>
                                <Text style={style.addArticleText}>Ajouter un article</Text>
                            </View>
                        </TouchableOpacity> 
                        
                    </View>
                    <View style={style.containerTemplate}>
                        <View style={style.containerDepensesTemplate}>
                                <View style={style.containerFirstLine}>
                                    <View style={style.containerProduct}>
                                        <Text style={style.articleName}>Poivron</Text>
                                    </View>
                                    <View style={style.containerButtons}>
                                        <View style={style.containerDeleteButton}>
                                            <TouchableOpacity onPress={handleDelete} style={style.deleteButton}>
                                                <Image
                                                    source={require('../assets/croix.png')}
                                                    style={style.image}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={style.containerQuantity}>
                                            <TouchableOpacity onPress={handleMoinsPress} style={style.moinsButton}>
                                                <Image
                                                    source={require('../assets/buttonMoins.png')}
                                                    style={style.image}
                                                />
                                            </TouchableOpacity>
                                            <Text style={style.quantity}>2</Text>
                                            <TouchableOpacity onPress={handlePlusPress} style={style.plusButton}>
                                                <Image
                                                    source={require('../assets/buttonPlus.png')}
                                                    style={style.image}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            </View>
                            <View style={style.containerOpen}>
                                <Text style={style.date}>Ouvert le :</Text>
                            </View>

                            <View style={style.containerSecondLine}>
                                    <View style={style.containerZero}>
                                        <Text style={style.date}>Périme le :</Text>
                                    </View>
                                    <View style={style.containerBud}>
                                        <Text style={style.date}>A consommer avant le :</Text>
                                    </View>
                            </View>
                        </View>
                    </View>
                </View>

        </ScrollView>
    );
};

export default Stock;
