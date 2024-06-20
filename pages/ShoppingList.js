import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/shoppingListStyle.js';
import AddShoppingList from './AddShoppingList.js';

const ShoppingList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [articles, setArticles] = useState([
        {
            id: 1,
            name: 'Poivron',
            quantity: 2,
            price: '5,60',
            checked: false,
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

    const handleAddShoppingList = (newArticle) => {
        setArticles(prevArticles => [
            ...prevArticles, 
            { ...newArticle, id: prevArticles.length + 1, checked: false }
        ]);
        handleCloseModal();
    };

    const handleCheckArticle = (id) => {
        setArticles(prevArticles =>
            prevArticles.map(article =>
                article.id === id
                    ? { ...article, checked: !article.checked }
                    : article
            )
        );
    };

    const checkedArticlesCount = articles.filter(article => article.checked).length;
    const progressPercentage = (checkedArticlesCount / articles.length) * 100;

    return (
        <ScrollView contentContainerStyle={style.container}>
            <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                <View style={style.backButtonContent}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={style.backButtonText}>Retour</Text>
                </View>
            </TouchableOpacity>
            <View style={style.title}>
                <Text style={style.titleBudget}>Liste de course 🛒</Text>
            </View>
            <View style={[style.containermonth, { flex: 1 }]}>
                <Text style={style.articleScan}>Articles achetés</Text>
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
                    <Text style={style.listCuranteNumber}>{checkedArticlesCount}</Text>
                    <Text style={style.listNumber}>{articles.length}</Text>
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
                                <TouchableOpacity onPress={() => handleCheckArticle(article.id)}>
                                    <Text style={article.checked ? style.articleNameChecked : style.articleName}>
                                        {article.name}
                                    </Text>
                                </TouchableOpacity>
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
                                <Text style={style.date}>{article.price}€</Text>
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
                <AddShoppingList 
                    onClose={handleCloseModal} 
                    onAddShoppingList={handleAddShoppingList} 
                />
            </Modal>
        </ScrollView>
    );
};

export default ShoppingList;