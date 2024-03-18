import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {style} from '../components/loginStyle.js'
import { View, Text, Dimensions, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Mettez ici votre logique de connexion
        console.log('Login button pressed');
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
                        style={[style.input, {backgroundColor: '#fff', paddingLeft: 10}]} // Ajout de paddingLeft
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
