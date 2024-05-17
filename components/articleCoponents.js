import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Alert } from 'react-native';

const MyComponent = () => {
    const handleDelete = () => {
        // Logique de suppression ici
        Alert.alert('Delete button pressed');
    };

    const handleMoinsPress = () => {
        // Logique de diminution ici
        Alert.alert('Moins button pressed');
    };

    const handlePlusPress = () => {
        // Logique d'augmentation ici
        Alert.alert('Plus button pressed');
    };

    return (
        <View style={styles.containerTemplate}>
            <View style={styles.containerDepensesTemplate}>
                <View style={styles.containerFirstLine}>
                    <View style={styles.containerProduct}>
                        <Text style={styles.articleName}>Poivron</Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <View style={styles.containerDeleteButton}>
                            <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
                                <Image
                                    source={require('../assets/croix.png')}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerQuantity}>
                            <TouchableOpacity onPress={handleMoinsPress} style={styles.moinsButton}>
                                <Image
                                    source={require('../assets/buttonMoins.png')}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>2</Text>
                            <TouchableOpacity onPress={handlePlusPress} style={styles.plusButton}>
                                <Image
                                    source={require('../assets/buttonPlus.png')}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.containerOpen}>
                    <Text style={styles.date}>Ouvert le :</Text>
                </View>

                <View style={styles.containerSecondLine}>
                    <View style={styles.containerZero}>
                        <Text style={styles.date}>Périme le :</Text>
                    </View>
                    <View style={styles.containerBud}>
                        <Text style={styles.date}>A consommer avant le :</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerSecondLine: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        paddingBottom: 10,
    },
    containerTemplate: {
        padding: 10,
    },
    containerFirstLine: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerDepensesTemplate: {
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
    },
    articleName: {
        fontSize: 18,
    },
    quantity: {
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18,
    },
    containerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
    },
    date: {
        color: '#AEABAB',
        fontSize: 12,
    },
    containerProduct: {
        paddingTop: 5,
    },
    containerOpen: {
        width: '100%',
        paddingLeft: 10,
    },
    containerButtonDepense: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    addArticleContent: {
        backgroundColor: "rgba(132, 174, 78, 0.15)",
        padding: 8,
        borderRadius: 12,
    },
    containerDeleteButton: {
        paddingBottom: 10,
        alignItems: 'flex-end',
        width: '100%',
    },
    image: {
        width: 20,
        height: 20,
    },
});

export default MyComponent;
