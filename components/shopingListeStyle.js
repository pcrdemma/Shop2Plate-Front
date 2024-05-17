import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'space-between',
        padding: 20,
    },
    backButtonScare: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'blue',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
    },
    backButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});