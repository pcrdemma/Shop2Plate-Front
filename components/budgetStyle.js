import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        backgroundColor : 'white',
        flex: 1,
        padding : 20,
        paddingTop: 100,      // Centre les éléments horizontalement
        alignSelf: 'stretch',       // S'étend pour prendre toute la largeur disponible
    },
    backButton: {
        paddingTop: 30,
        position: 'absolute',
        top: 20,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backButtonText: {
        fontSize: 20,
        marginLeft: 10,
    },
    title: {
        alignItems : 'center',
    },
    titleBudget: {
        fontSize: 26,
    },
    containermonth: {
        paddingTop : 30,
        width : '90%',
        alignSelf: 'center',   // Alignez à gauche
    },
    containerProgressionBar: {
        width : '100%',
        flexDirection : 'row',
        height : 25,
        borderRadius : 10,
        backgroundColor : "rgba(132, 174, 78, 0.4)",
    },
    progressionbar: {
        alignItems : 'flex-end',
        width : '50%', //modifier la width en fonction des dépenses en back
        padding : 5,
        height : 25,
        borderRadius : 20,
        paddingRight : 10,
        backgroundColor : "rgba(132, 174, 78, 0.4)",
    },
    month: {
        paddingLeft : 20,
        color : '#505050',
        fontSize: 20,
    },
    depense: {
        color : '#484747',
    },
    price: {
        color : '#AEABAB',
    },
    containerPrice: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        marginTop: 5, 
    },
    containerDepensesEffectues: {
        flexDirection: 'row', // Alignement horizontal
        justifyContent: 'flex-end', // Alignement à droite
    },
    depensesEffectues: {
        paddingRight : '3%',
        marginRight : '-3%',
        color : '#727272',
        fontSize : 16,
    },
    containerTemplate: {
        padding : '5%',
        paddingTop : 20,
    },
    dateTemplateDepense: {
        color : '#888888',
        paddingLeft : 10,
    },
    containerDepensesTemplate: {
        backgroundColor : '#FAFAFA',
        borderRadius : 10,
        height : 60,
        alignItems : 'center',
        padding : 10,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 5, 
    },
    containerButtonDepense: {
        flexDirection : 'row',
        alignItems : 'center',
        width : '100%',
        justifyContent : 'space-between',
        paddingLeft : 20,
    },
    addArticleContent : {
        backgroundColor : "rgba(132, 174, 78, 0.15)",
        padding : 8,
        borderRadius : 12,
    },
    containerDeleteButton: {
        paddingBottom : 10,
        alignItems : 'flex-end',
        width: '100%',
    }
});