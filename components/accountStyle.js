import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding : '10%',
        alignItems: 'center',
        backgroundColor : '#fff',
    },
    text: {
        fontSize: 36,
    },
    backButton: {
        marginTop: 30,
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
        fontSize:20,
        marginLeft: 10, // Espacement entre l'icône et le texte
    },
    inputContainer: {
        alignItems:'center',
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
        marginTop : 25,
        fontSize : 25,
    },
    textModif: {    
        alignItems : 'center',
    },
    rectangle: {
        marginTop : 20,
        marginBottom : 20,
        width: '90%', // Largeur du rectangle
        height: 6, // Hauteur du rectangle
        backgroundColor: 'rgba(132, 174, 78, 0.4)', // Couleur de fond du rectangle
        borderRadius: 10, // Rayon de bordure pour rendre le rectangle plus arrondi
    },
    containerCheckbox: {

        width : '100%',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start', // Aligner la vue à gauche de l'écran
    },
    checkboxLabel : {
        fontSize: 16,
    },
});