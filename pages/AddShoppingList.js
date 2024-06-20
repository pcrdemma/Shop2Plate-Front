import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, TextInput } from 'react-native';
import { style } from '../components/addStockStyle.js';

const AddShoppingList = ({ onClose, onAddShoppingList }) => {
    const [articleTitle, setArticleTitle] = useState('');
    const [articleQuantity, setArticleQuantity] = useState('');
    const [articlePrice, setArticlePrice] = useState('');

    const handleAddShoppingList = () => {
        const newArticle = {
            name: articleTitle,
            quantity: parseInt(articleQuantity),
            price: articlePrice,
        };
        onAddShoppingList(newArticle);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={style.container}>
                <View style={[style.card, style.dropShadow]}>
                    <TouchableOpacity onPress={onClose} style={style.closeButton}>
                        <Image
                            source={require('../assets/croix.png')}
                            style={style.closeImage}
                        />
                    </TouchableOpacity>
                    <View style={style.pageTitleContainer}>
                        <Text style={style.title}>Ajout d'un article dans la liste</Text>
                    </View>
                    <View>
                        <TextInput
                            style={style.articleTitleInput}
                            placeholder="Titre de l'article"
                            placeholderTextColor="#888888"
                            value={articleTitle}
                            onChangeText={setArticleTitle}
                        />
                        <TextInput
                            style={style.articleQuantityInput}
                            placeholder="Quantité"
                            placeholderTextColor="#888888"
                            keyboardType="numeric"
                            value={articleQuantity}
                            onChangeText={setArticleQuantity}
                        />
                        <TextInput
                            style={style.articlePriceInput}
                            placeholder="Prix"
                            placeholderTextColor="#888888"
                            keyboardType="numeric"
                            value={articlePrice}
                            onChangeText={setArticlePrice}
                        />
                    </View>
                    <View style={style.buttonScare}>
                        <TouchableOpacity style={style.button} onPress={handleAddShoppingList}>
                            <Text style={style.buttonText}>Ajouter à la liste</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddShoppingList;
