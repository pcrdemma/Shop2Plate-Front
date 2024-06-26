import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {        
        justifyContent:'center',
        flex: 1,
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        padding: '10%',
        paddingTop : '20%',
    },
    backButton: {
        marginTop: 30,
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
    },
    backButtonContent: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    backButtonText: {
        fontSize: 20,
        marginLeft: 10, 
    },
    text: {
        fontSize: 48,
    },
    exchange : {
        width : 20,
        height: 20,
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
        marginTop : 20,
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
    inputContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(132, 174, 78, 0.4)',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    modif: {
        marginTop: 25,
        fontSize: 25,
    },
    textModif: {
        alignItems: 'center',
    },
    containerCheckbox: {
        width: '100%',
        justifyContent: 'flex-start', 
    },
    checkboxContainer: {
        zIndex : 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start', 
    },
    checkboxLabel: {
        fontSize: 16,
    },
    account: {
        paddingTop: 50,
        alignItems: 'center',
    },
    rectanglecheckbox : {
        flex: 1,
        flexDirection : 'row',
        alignItems : 'center',
        padding: '4%',
        borderRadius : 10,
        backgroundColor: '#fff',
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5, 
    },
    containerMax : {
        justifyContent : 'flex-start',
        width : '75%',
    },
    max : {
        fontSize:16,
        justifyContent : 'flex-start',
    },
    containerInputMaximum : {
        width : '25%',
    },
    inputMaximum : {
        justifyContent : 'flex-end',
        width : '100%',
        height : '100%',
        borderWidth: 1,
        borderColor: 'rgba(132, 174, 78, 0.4)',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    containerInputMax : {
        textAlign : 'right',
    },

    tipsBudget : {
        fontSize : 11,
        alignItems : 'center',
        fontStyle : 'italic',
    },
    inputRevenu : {
        width : '100%',
    },
    rectangleRevenu : {
        marginLeft : 10,
        flex: 1,
        width : '40%',
        alignItems : 'center',
        padding: '4%',
        borderRadius : 10,
        backgroundColor: '#fff',
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5, 
    },

    twoRectangle : {
        paddingTop : 10,
        flexDirection : 'row',
    },
    containerDeco : {
        paddingTop : 40,
        alignItems : 'center',
    },
    buttonDeco : {
        height : 40,
        justifyContent : 'center',
        borderRadius : 10,
        width :'60%',
        alignItems : 'center',
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
    },
    buttonTextDeco : {
        fontSize : 20,
    },
});