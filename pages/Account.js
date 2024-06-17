import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { style } from '../components/accountStyle.js';

const Account = () => {
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [budget, setBudget] = useState('');
    const [revenu, setRevenu] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const { userId } = route.params; // Get the user ID from the route params

    const handleBackPress = () => {
        console.log('Return button pressed');
    };

    const handleDeconnexion = () => {
        console.log('Deconnexion button pressed');
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Effectuer une requête pour récupérer les données du compte en utilisant l'ID de l'utilisateur
                const response = await fetch(`https://shop2plate-back.onrender.com/users/user/${userId}`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données du compte');
                }
                const userData = await response.json();
                // Mettre à jour le state avec les données récupérées
                setEmail(userData.email);
                setPrenom(userData.prenom);
                setBudget(userData.budget);
                setRevenu(userData.revenu);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du compte:', error.message);
                // Traitez l'erreur, affichez un message à l'utilisateur, etc.
            }
        };

        fetchUserData();
    }); // Ajout de userId comme dépendance pour s'assurer que fetchUserData est appelée lorsque userId change

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={style.container}>
                    <TouchableOpacity onPress={handleBackPress} style={style.backButton}>
                        <View style={style.backButtonContent}>
                            <Ionicons name="arrow-back" size={24} color="black" />
                            <Text style={style.backButtonText}>Retour</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={style.account}>
                        <Image style={style.exchange} source={require('../assets/girl.png')} />
                        <Text style={style.text}>{prenom}</Text>
                        <View style={style.inputContainer}>
                            <TextInput
                                style={[style.input, {backgroundColor: '#fff'}]}
                                placeholder="Prénom"
                                onChangeText={setPrenom}
                                value={prenom}
                                keyboardType="default"
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={[style.input, {backgroundColor: '#fff'}]}
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
                                    style={[style.input, {backgroundColor: '#fff', paddingLeft: 10}]}
                                    placeholder="Nouveau mot de passe"
                                    onChangeText={setNewPassword}
                                    value={newPassword}
                                    secureTextEntry={true}
                                />
                                <TextInput
                                    style={[style.input, {backgroundColor: '#fff', paddingLeft: 10}]}
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
                                <Text style={style.modif}>Budget course 💰 </Text>
                            </View>
                            <View style={style.budgetdefined}>
                                <View style={style.checkboxContainer}>
                                    <CheckBox
                                        checked={checked}
                                        onPress={() => setChecked(!checked)}
                                        uncheckedIcon="square"
                                        checkedIcon="check-square"
                                        uncheckedColor="rgb(217, 217, 217)"
                                        checkedColor='rgba(132, 174, 78, 0.4)'
                                        containerStyle={style.checkbox}
                                        textStyle={style.checkboxText}
                                    />
                                    <Text style={style.checkboxLabel}>Budget défini</Text>
                                </View>
                                <View style={style.rectanglecheckbox}>
                                    <View style={style.containerMax}>
                                        <Text style={style.max}>Maximum</Text>
                                    </View>
                                    <View style={style.containerInputMaximum}>
                                        <View style={style.containerInputMax}>
                                            <TextInput
                                                style={[style.inputMaximum, {backgroundColor: '#fff'}]}
                                                placeholder="400€"
                                                onChangeText={setBudget}
                                                value={budget}
                                                keyboardType="default"
                                                autoCapitalize="none"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={style.budgetdefined}>
                                <View style={style.checkboxContainer}>
                                    <CheckBox
                                        checked={checked}
                                        onPress={() => setChecked(!checked)}
                                        uncheckedIcon="square"
                                        checkedIcon="check-square"
                                        uncheckedColor="rgb(217, 217, 217)"
                                        checkedColor='rgba(132, 174, 78, 0.4)'
                                        containerStyle={style.checkbox}
                                        textStyle={style.checkboxText}
                                    />
                                    <Text style={style.checkboxLabel}>Budget calculé</Text>
                                </View>
                                <Text style={style.tipsBudget}>budget course géré en fonction de votre paie, soit 18% de la somme</Text>
                                <View style={style.twoRectangle}>
                                    <View style={style.rectangleRevenu}>
                                        <View style={style.containerInputMax}>
                                            <TextInput
                                                style={[style.inputRevenu, {backgroundColor: '#fff'}]}
                                                placeholder="Revenu mensuel"
                                                onChangeText={setRevenu}
                                                value={revenu}
                                                keyboardType="default"
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
                            <View style={style.containerDeco}>
                                <TouchableOpacity style={style.buttonDeco} onPress={handleDeconnexion}>
                                    <Text style={style.buttonTextDeco}>DECONNEXION</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Account;
