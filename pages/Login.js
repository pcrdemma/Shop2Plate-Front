import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { style } from '../components/loginStyle.js';
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';

const Login = ({ route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const { setIsAuthenticated } = route.params;

    const handleLogin = () => {
        const query = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
        fetch(`https://shop2plate-back.onrender.com/users/login?${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status === 404) {
                throw new Error('Compte inexistant');
            }
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text) });
            }
            return response.json();
        })
        .then(data => {
            
            if (data.rowCount > 0) {
                Alert.alert('Connexion réussie', 'Bienvenue 😊');
            } else {
                setIsAuthenticated(true);
                navigation.navigate('Account'); 
            }
        })
        .catch(error => {
            Alert.alert('Erreur lors de la connexion', 'Email ou mot de passe incorrect, ou inscrivez-vous 😊');
        });
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={style.container}>
                <Text style={style.text}>Bonjour !👋🏼</Text>
                <Text style={style.connexion}>Connectez-vous à votre compte</Text>                
                <View style={style.imageContainer}>
                    <Image style={style.shoppingBag} source={require('../assets/shopping-bag.png')} />
                </View>
                <View style={style.inputContainer}>
                    <TextInput
                        style={[style.input, {backgroundColor: '#fff'}]}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={[style.input, {backgroundColor: '#fff', paddingLeft: 10}]}
                        placeholder="Mot de passe"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={style.button} onPress={handleLogin}>
                        <Text style={style.buttonText}>CONNEXION</Text>
                    </TouchableOpacity>
                    <Text style={style.textCreate}>Vous n’avez pas de compte ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={[style.linkText, {textDecorationLine: 'underline'}]}>Créer-en un !</Text>                    
                    </TouchableOpacity>
                </View> 
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;