import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/stockStyle.js';
import AddStock from './AddStock.js';

const Stock = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [articles, setArticles] = useState([
        {
            id: 1,
            name: 'Poivron',
            quantity: 2,
            openDate: '10/06/2024',
            expirationDate: '20/06/2024'
        }
    ]);

    const handleBackPress = () => {
        console.log('Bouton retour pressé');
    };

    const handleMoinsPress = (id) => {
        setArticles(prevArticles =>
            prevArticles.map(article =>
                article.id === id && article.quantity > 0
                    ? { ...article, quantity: article.quantity - 1 }
                    : article
            )
        );
    };

    const handlePlusPress = (id) => {
        setArticles(prevArticles =>
            prevArticles.map(article =>
                article.id === id
                    ? { ...article, quantity: article.quantity + 1 }
                    : article
            )
        );
    };

    const handleAddArticle = () => {
        setModalVisible(true);
    };

    const handleDelete = (id) => {
        setArticles(prevArticles =>
            prevArticles.filter(article => article.id !== id)
        );
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleAddStock = (newArticle) => {
        setArticles(prevArticles => [...prevArticles, newArticle]);
        handleCloseModal();
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.title}>
                <Text style={style.titleBudget}>Stock de courses 🛒</Text>
            </View>
            <View style={[style.containermonth, { flex: 1 }]}>
                <Text style={style.articleScan}>Articles ajoutés</Text>
                <View style={[style.containerProgressionBar]}>
                    <View style={style.progressionbar}>
                        <Text style={style.depense}>{articles.length}</Text>
                    </View>
                </View>
                <View style={style.containerPrice}>
                    <View style={style.containerZero}>
                        <Text style={style.unite}>0</Text>
                    </View>
                </View>
            </View>
            <View style={[style.containerDepenseBudget, { flex: 6 }]}>
                <View style={style.containerButtonDepense}>
                    <TouchableOpacity onPress={handleAddArticle} style={style.addArticle}>
                        <View style={style.addArticleContent}>
                            <Text style={style.addArticleText}>Ajouter un article</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {articles.map((article) => (
                    <View key={article.id} style={style.containerTemplate}>
                        <View style={style.containerDepensesTemplate}>
                            <View style={style.containerFirstLine}>
                                <View style={style.containerProduct}>
                                    <Text style={style.articleName}>{article.name}</Text>
                                </View>
                                <View style={style.containerButtons}>
                                    <View style={style.containerDeleteButton}>
                                        <TouchableOpacity onPress={() => handleDelete(article.id)} style={style.deleteButton}>
                                            <Image
                                                source={require('../assets/croix.png')}
                                                style={style.image}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={style.containerQuantity}>
                                        <TouchableOpacity onPress={() => handleMoinsPress(article.id)} style={style.moinsButton}>
                                            <Image
                                                source={require('../assets/buttonMoins.png')}
                                                style={style.image}
                                            />
                                        </TouchableOpacity>
                                        <Text style={style.quantity}>{article.quantity}</Text>
                                        <TouchableOpacity onPress={() => handlePlusPress(article.id)} style={style.plusButton}>
                                            <Image
                                                source={require('../assets/buttonPlus.png')}
                                                style={style.image}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={style.containerOpen}>
                                <Text style={style.date}>Ouvert le : {article.openDate}</Text>
                            </View>
                            <View style={style.containerSecondLine}>
                                <View style={style.containerZero}>
                                    <Text style={style.date}>Périme le : {article.expirationDate}</Text>
                                </View>
                                <View style={style.containerBud}>
                                    <Text style={style.date}>À consommer avant le : {article.expirationDate}</Text>
                                </View>
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
                <AddStock onClose={handleCloseModal} onAddStock={handleAddStock} />
            </Modal>
        </ScrollView>
    );
};

export default Stock;
