import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container: {
        justifyContent:'center',
        flex: 1,
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        padding: '10%',
    },
    text: {
        fontSize: 48,
    },
    connexion: {
        fontSize: 18,
    },
    imageContainer: {
        marginTop: 50,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    shoppingBag: {
        width: 220, 
        height: 220, 
    },
    inputContainer: {
        alignItems:'center',
        marginTop: 40,
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        paddingVertical: 10,
        paddingHorizontal: 24,
        marginTop : 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
    },
    textCreate : {
        marginTop : 15,
    },
    linkText : {
        color : 'rgba(42, 75, 0, 1)',
        textDecorationLine: 'underline',
    },
});