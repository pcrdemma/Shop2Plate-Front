import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding : 20,
        paddingTop: 100,
        alignItems: 'center',       // Centre les éléments horizontalement
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
    titleBudget: {
        fontSize: 26,
    },
    containermonth: {
        paddingTop : 30,
        alignSelf: 'flex-start',   // Alignez à gauche
    },
    containerProgressionBar: {
        width : '90%',
        height : 25,
        borderRadius : 10,
        backgroundColor : "rgba(132, 174, 78, 0.4)",
    },
    progressionbar: {
        width : '20%', //modifier la width en fonction des dépenses en back
        padding : 5,
        height : 25,
        borderRadius : 20,
        backgroundColor : "rgba(132, 174, 78, 0.4)",
    },
    month: {
        paddingLeft : 20,
        color : '#505050',
        fontSize: 20,
    }
});