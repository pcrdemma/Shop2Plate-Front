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
    articleScan: {
        paddingLeft : 20,
        color : '#505050',
        fontSize: 16,
        paddingBottom : 5,
    },
    depense: {
        color : '#484747',
    },
    unite: {
        color : '#AEABAB',
    },
    containerSecondLine: {
        flexDirection: 'row', 
        width : '100%',
        justifyContent: 'space-between', 
        paddingLeft : 10,
        paddingRight : 10,
        marginTop: 5, 
        paddingBottom : 10,
    },
    containerDepensesEffectues: {
        flexDirection: 'row', // Alignement horizontal
        justifyContent: 'flex-end', // Alignement à droite
    },
    depensesEffectues: {
        paddingRight : '5%',
        color : '#727272',
        fontSize : 18,
    },
    containerTemplate: {
        padding : 10,
    },
    containerFirstLine:{
        padding : 10,
        width : '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    containerDepensesTemplate: {
        backgroundColor : '#FAFAFA',
        borderRadius : 10,
        alignItems : 'center',
        padding : 10,
        marginTop: 5, 
    },
    articleName: {
        fontSize : 18,
    },
    quantity : {
        paddingRight : 10,
        paddingLeft : 10,
        fontSize : 18,
    },
    containerQuantity: {
        flexDirection : 'row',
        alignItems : 'center',
    },
    date: {
        color : '#AEABAB',
        fontSize : 12,
    },
    containerOpen: {
        width : '100%',
        paddingLeft : 10,
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
    }
});