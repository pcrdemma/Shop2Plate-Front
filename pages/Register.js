import React, { useState } from 'react';
import { style } from '../components/registerStyle.js';

import { useNavigation } from '@react-navigation/native';
import { View, Text, Image,TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const Register = () => {
    const [selectedImage, setSelectedImage] = useState(require('../assets/girl.png'));
    const [isMale, setIsMale] = useState(false);

    // Méthode appelée lorsque l'utilisateur sélectionne une image
    const handleImageSelection = (image, gender) => {
        setSelectedImage(image);
        setIsMale(gender);
    };
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation();

    const handleLogin = () => {
        // Mettez ici votre logique de connexion
        console.log('Login button pressed');
    };

    // Méthode appelée lorsque l'utilisateur change de photo
    const handleChangePhoto = () => {
        if (selectedImage === require('../assets/girl.png')) {
            handleImageSelection(require('../assets/boy.png'), true);
        } else {
            handleImageSelection(require('../assets/girl.png'), false);
        }
    };

    return (
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
                        style={[style.input, {backgroundColor: '#fff'}]}
                        placeholder="Prénom"
                        onChangeText={setPrenom}
                        value={prenom}
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={[style.input, {backgroundColor: '#fff'}]}
                        placeholder="Nom de famille"
                        onChangeText={setName}
                        value={name}
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
                    <TextInput
                        style={[style.input, {backgroundColor: '#fff', paddingLeft: 10}]} // Ajout de paddingLeft
                        placeholder="Mot de passe"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={style.button} onPress={handleLogin}>
                        <Text style={style.buttonText}>INSCRIPTION</Text>
                    </TouchableOpacity>
                    <Text style={style.textCreate}>Vous avez déjà un compte ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[style.linkText, {textDecorationLine: 'underline'}]}>Connectez-vous !</Text>                    
                    </TouchableOpacity>
                </View> 
            </View>
        </KeyboardAvoidingView>
    );
};

export default Register;
