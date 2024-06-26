import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        backgroundColor : 'white',
        flex: 1,
        padding : 20,
        paddingTop: 100,  
        alignSelf: 'stretch',    
    },
    progress: {
        height: '100%',
        width: '50%',
        borderRadius: 10,
        position: 'absolute', 
    },
    progresseBarContent: {
        width: '100%',
        height: 20,
        backgroundColor: 'rgba(132, 174, 78, 0.15)',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    listNumber: {
        fontSize: 15,
        color: '#000',
        paddingRight: 10,
    },
    listCuranteNumber: {
        fontSize: 15,
        color: '#000',
        paddingLeft: 10,
        justifyContent: 'flex-end',
        width: '50%',
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
        alignSelf: 'center',
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
        width : '50%',
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
    depensesEffectues: {
        paddingRight : '5%',
        color : '#727272',
        fontSize : 18,
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
        paddingRight : 20,
    },
    date: {
        color : '#AEABAB',
        fontSize : 12,
    },
    containerProduct: {
        paddingTop : 5,
    },
    containerOpen: {
        width : '100%',
        paddingLeft : 10,
    },
    containerButtonDepense: {
        flexDirection : 'row',
        alignItems : 'center',
        width : '100%',
        justifyContent : 'flex-end',
        paddingRight : 20,
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
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});