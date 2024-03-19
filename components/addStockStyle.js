import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'space-between',
        backgroundColor: 'rgba(132, 174, 78, 0.15)',
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

    pageTitleContainer: {
        alignItems: 'center',
        height: 50,
    },

    scanArticleContainer: {
        padding: 15,
        height: 50,
    },

    text: {
        fontSize: 15,
        marginTop: 10,
        flexDirection: 'row',
        // alignItems: 'center',
    },

    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },

    dropShadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '55%',
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        paddingVertical: 10,
        paddingHorizontal: 24,
        marginTop: 50,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 17,
    },
});