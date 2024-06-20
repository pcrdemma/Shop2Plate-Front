import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: '10%',
        // alignItems: 'center', // Supprimez ou commentez cette ligne pour empêcher le centrage des éléments
        backgroundColor: '#fff',
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
        fontSize: 20,
        marginLeft: 10, // Espacement entre l'icône et le texte
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
    rectangle: {
        marginTop: 20,
        marginBottom: 20,
        width: '90%', // Largeur du rectangle
        height: 6, // Hauteur du rectangle
        backgroundColor: 'rgba(132, 174, 78, 0.15)', // Couleur de fond du rectangle
        borderRadius: 10, // Rayon de bordure pour rendre le rectangle plus arrondi
    },
    containerCheckbox: {
        width: '100%',
        justifyContent: 'flex-start', // Aligner les éléments au début de l'axe principal (à gauche)
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start', // Aligner la checkboxContainer au début de l'axe croisé (en haut)
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
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, // Opacité de l'ombre
        shadowRadius: 3.84, // Rayon de l'ombre
        elevation: 5, // Élévation pour Android
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
        shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, // Opacité de l'ombre
        shadowRadius: 3.84, // Rayon de l'ombre
        elevation: 5, // Élévation pour Android
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
        width : 180,
        alignItems : 'center',
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
    },
    buttonTextDeco : {
        fontSize : 20,
    },
    containerSuppr : {
        paddingTop : 40,
        alignItems : 'flex-end',
    },
    buttonSuppr : {
        height : 20,
        justifyContent : 'center',
        borderRadius : 7,
        width : 140,
        alignItems : 'center',
        backgroundColor: 'rgba(255, 00, 0, 0.15)',
    },
    buttonTextSuppr : {
        fontSize : 14,
    },
});
