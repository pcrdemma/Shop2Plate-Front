import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

    scrollViewContainer: {
        flexGrow: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    innerContainer: {
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 170,
    },
    imageLogo: {
        width: 200,
        height: 200,
        marginTop: 90,
    },
    imageTrolly: {
        width: 250,
        height: 170,
        marginTop: 50,
    },
    imageArrow: {
        width: 50,
        height: 50,
        marginTop: 150,
    },
});