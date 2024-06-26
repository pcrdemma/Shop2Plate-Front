import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { style } from '../components/accountStyle.js';
import { RadioButton } from 'react-native-paper';
import { getData } from '../model/AsyncStorage';

const Account = () => {
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [budget, setBudget] = useState('');
    const [revenu, setRevenu] = useState('');
    const [sexe, setSexe] = useState('');
    const navigation = useNavigation();
    const [isBudgetDefiniSelected, setIsBudgetDefiniSelected] = useState(false);
    const route = useRoute();
    getData('userId').then(value => {
        userId = value;
    });

    const handleDeconnexion = () => {
        navigation.navigate('Login');
    };
    const handleSuppr = async () => {
        fetch(`https://shop2plate-back.onrender.com/users/deleteUser/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: userId }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la suppression du compte');
                }
                navigation.navigate('Register');
            })
            .catch(error => {
                console.error('Erreur lors de la suppression du compte:', error.message);
                // Traitez l'erreur, affichez un message à l'utilisateur, etc.
            });        
    };

    useEffect(() => {
        const fetchUserData = async () => {
            fetch(`https://shop2plate-back.onrender.com/users/user/${userId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des données du compte');
                    }
                    return response.json();
                })
                .then(userData => {
                    console.log(userData);
                    setEmail(userData.email);
                    setPrenom(userData.firstname);
                    setBudget(userData.price);
                    setRevenu(userData.price);
                    setSexe(userData.sexe);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données du compte:', error.message);
                    // Traitez l'erreur, affichez un message à l'utilisateur, etc.
                });
        };

        fetchUserData();
    }); // Ajout de userId comme dépendance pour s'assurer que fetchUserData est appelée lorsque userId change

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={style.container}>
                    <View style={style.containerSuppr}>
                        <TouchableOpacity style={style.buttonSuppr} onPress={handleSuppr}>
                            <Text style={style.buttonTextSuppr}>Supprimer le compte</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.account}>
                        <Image
                            style={style.exchange}
                            source={
                                sexe === true
                                    ? require('../assets/girl.png')
                                    : require('../assets/boy.png') // Remplacez par le chemin de l'image pour un autre sexe
                            }
                        />
                        <Text style={style.text}>{prenom}</Text>
                        <View style={style.inputContainer}>
                            <TextInput
                                style={[style.input, { backgroundColor: '#fff' }]}
                                placeholder="Prénom"
                                onChangeText={setPrenom}
                                value={prenom}
                                keyboardType="default"
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={[style.input, { backgroundColor: '#fff' }]}
                                placeholder="Email"
                                onChangeText={setEmail}
                                value={email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                        <View>
                            <Text style={style.modif}>Modifier le mot de passe 🔐</Text>
                            <View style={style.inputContainer}>
                                <TextInput
                                    style={[style.input, { backgroundColor: '#fff', paddingLeft: 10 }]}
                                    placeholder="Nouveau mot de passe"
                                    onChangeText={setNewPassword}
                                    value={newPassword}
                                    secureTextEntry={true}
                                />
                                <TextInput
                                    style={[style.input, { backgroundColor: '#fff', paddingLeft: 10 }]}
                                    placeholder="Confirmer le mot de passe"
                                    onChangeText={setConfirmNewPassword}
                                    value={confirmNewPassword}
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={style.rectangle}></View>
                        <View style={style.containerCheckbox}>
                            <View style={style.textModif}>
                                <Text style={style.modif}>Budget course 💰</Text>
                            </View>
                            <View style={style.budgetdefined}>
                                <View style={style.checkboxContainer}>
                                    <RadioButton.Item
                                        label="Budget défini"
                                        value={true}
                                        status={checked === true ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(true);
                                            setIsBudgetDefiniSelected(true);
                                        }}
                                        labelStyle={isBudgetDefiniSelected ? { fontWeight: 'bold' } : null}
                                    />
                                    <RadioButton.Item
                                        label="Budget calculé"
                                        value={false}
                                        status={checked === false ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(false);
                                            setIsBudgetDefiniSelected(false);
                                        }}
                                        labelStyle={!isBudgetDefiniSelected ? { fontWeight: 'bold' } : null}
                                    />
                                </View>
                                {checked ? (
                                    <View style={style.rectanglecheckbox}>
                                        <View style={style.containerMax}>
                                            <Text style={style.max}>Maximum</Text>
                                        </View>
                                        <View style={style.containerInputMaximum}>
                                            <View style={style.containerInputMax}>
                                                <TextInput
                                                    style={[style.inputMaximum, { backgroundColor: '#fff' }]}
                                                    placeholder="400€"
                                                    onChangeText={setBudget}
                                                    value={budget}
                                                    keyboardType="numeric"
                                                    autoCapitalize="none"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    <Text style={style.tipsBudget}>budget course géré en fonction de votre paie, soit 18% de la somme</Text>
                                )}
                            </View>
                            {!checked ? (
                                <View style={style.budgetdefined}>
                                    <View style={style.twoRectangle}>
                                        <View style={style.rectangleRevenu}>
                                            <View style={style.containerInputMax}>
                                                <TextInput
                                                    style={[style.inputRevenu, { backgroundColor: '#fff' }]}
                                                    placeholder="Revenu mensuel"
                                                    onChangeText={setRevenu}
                                                    value={revenu}
                                                    keyboardType="numeric"
                                                    autoCapitalize="none"
                                                />
                                            </View>
                                        </View>
                                        <View style={style.rectangleRevenu}>
                                            <View style={style.containerInputMax}>
                                                <Text>Revenu x 0,82</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ) : null}
                        </View>
                        <View style={style.containerDeco}>
                            <TouchableOpacity style={style.buttonDeco} onPress={handleDeconnexion}>
                                <Text style={style.buttonTextDeco}>DECONNEXION</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Account;