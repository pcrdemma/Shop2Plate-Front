import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    pageTitleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    scanArticleContainer: {
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: '100%',
        maxWidth: 400,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
    },
    peremptionScare: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    openScare: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
    },
    buttonDate: {
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        padding: 5,
        borderRadius: 5,
    },
    buttonDateText: {
        fontSize: 15,
    },
    buttonScare: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 17,
    },
    buttonDate: {
        backgroundColor: 'rgba(132, 174, 78, 0.4)',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        width: '35%',
        alignItems: 'center',
    },
    closeImage: {
        width : 15,
        height : 15,
    },
    articleTitleInput: {
        fontSize : 20,
    },
    containerDureeConservation: {
        flexDirection : 'row',
    },
    dureeConservationInput: {
        paddingLeft : 10        ,
    }
});