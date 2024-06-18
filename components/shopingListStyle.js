import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'space-between',
        padding: 20,
        flexDirection: 'column',
    },
    backButtonScare: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 10,
        flexDirection: 'row',
    },
    backButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageLogo: {
        marginRight: 6,
    },
    backButtonText: {
        fontSize: 15,
        color: '#000',
    },
    innerContainer: {
        flex: 1,
        top: 50,
        alignItems: 'center',
    },
    shopingListContainerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    imageTrolly: {
        width: 25,
        height: 25,
    },
    titleList: {
        marginTop: 20,
        width: '100%',
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
});