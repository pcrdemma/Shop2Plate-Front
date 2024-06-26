import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from '../components/registerStyle.js';
import { RadioButton } from 'react-native-paper';
import { storeData } from '../model/AsyncStorage.js';

const Register = () => {
    const [selectedImage, setSelectedImage] = useState(require('../assets/girl.png'));
    const [isMale, setIsMale] = useState(false);
    const [budget, setBudget] = useState('');
    const [checked, setChecked] = useState(false);

    const handleImageSelection = (image, gender) => {
        setSelectedImage(image);
        setIsMale(gender);
    };

    const [isBudgetDefiniSelected, setIsBudgetDefiniSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = async () => {
        const sexe = isMale;
        let budgetValue = parseFloat(budget);
        if (checked) {
            budgetValue *= 0.82;
        }
        if (isNaN(budgetValue) || budgetValue <= 0) {
            throw new Error("Le budget est invalide");
        }

        console.log({
            firstname: prenom,
            lastname: name,
            email,
            password,
            sexe,
            price: budgetValue,
            isChecked: checked
        });

        fetch('https://shop2plate-back.onrender.com/users/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: prenom,
                lastname: name,
                email,
                password,
                sexe,
                price: budgetValue,
                isChecked: checked
            }),
        })
            .then(response => {
                if (response.status === 404) {
                    throw new Error('Ressource non trouvée');
                }
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                console.log(response);
                return response.json();
            })
            .then(data => {
                // Vérifiez si l'utilisateur a été ajouté avec succès
                if (data.success) {
                    // Optionnel : Enregistrez l'utilisateur dans AsyncStorage (ou autre solution de stockage)
                    storeData('userId', data.user.id.toString());
                    navigation.navigate('Account');
                } else {
                    throw new Error(data.message || 'Erreur lors de l\'inscription');
                }
            })
            .catch(error => {
                console.error('Erreur lors de l\'inscription:', error);
                Alert.alert('Erreur lors de l\'inscription', error.message || 'Veuillez réessayer plus tard');
            });
    };

    const handleChangePhoto = () => {
        if (selectedImage === require('../assets/girl.png')) {
            handleImageSelection(require('../assets/boy.png'), true);
        } else {
            handleImageSelection(require('../assets/girl.png'), false);
        }
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <View style={style.container}>
                    <Text style={style.text}>Bienvenue !👋🏼</Text>
                    <Text style={style.connexion}>Créer votre compte</Text>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        {selectedImage && (
                            <View style={{ marginTop: 20, alignItems: 'center' }}>
                                <Image source={selectedImage} style={{ width: 200, height: 200, marginRight: 10 }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <Text>{isMale ? 'Mr' : 'Mme'}</Text>
                                    <TouchableOpacity onPress={handleChangePhoto} style={{ marginLeft: 10 }}>
                                        <Image style={style.exchange} source={require('../assets/exchange.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
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
                            placeholder="Nom de famille"
                            onChangeText={setName}
                            value={name}
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
                        <TextInput
                            style={[style.input, { backgroundColor: '#fff', paddingLeft: 10 }]}
                            placeholder="Mot de passe"
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                        />
                        <View style={style.containerCheckbox}>
                            <View style={style.textModif}>
                                <Text style={style.modif}>Budget course 💰 </Text>
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
                                                    onChangeText={setBudget}
                                                    value={budget}
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
                        <TouchableOpacity style={style.button} onPress={handleLogin}>
                            <Text style={style.buttonText}>INSCRIPTION</Text>
                        </TouchableOpacity>
                        <Text style={style.textCreate}>Vous avez déjà un compte ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.linkText, { textDecorationLine: 'underline' }]}>Connectez-vous !</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Register;
