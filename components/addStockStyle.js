import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center', 
        alignContent: 'space-between',
        backgroundColor: 'white',
        padding: 20,

    },
    backButton: {
        marginTop: 40,
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
    },
    backButtonContent: {
        flexDirection: 'row', // Alignement horizontal des éléments
        alignItems: 'center', // Alignement vertical des éléments
    },
    backButtonText: {
        fontSize: 20,
        marginLeft: 10, // Espacement entre l'icône et le texte
    },

    pageTitleContainer:{
        alignItems: 'center',
        height: 50,
    },

    scanArticleContainer:{
        padding: 15,
        height: 50,
    },

    cardContainer: {
        height: 200,
        flexDirection: 'Column',
        backgroundColor: 'rgba(132, 174, 78, 0.15)',
        borderRadius: 10,
        width: '100%',
        padding: '10%',
        
    },

    label: {
        fontSize: 15,
        fontWeight: 'normal',
        marginBottom: 5,
    },
    datePickerButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    // containerCard: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    //     backgroundColor: 'rgba(132, 174, 78, 0.15)',
    //     borderRadius: 10,
    //     width: '90%',
    //     marginVertical: 10,
    // },
    // titleCard: {
    //     marginRight: 10,
    // },
    // title: {
    //     fontSize: 20,
    // },
    // cardContainer: {
    //     flex: 1,
    //     padding: 10,
    // },

});