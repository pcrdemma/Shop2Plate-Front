import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: '10%',
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
        flexDirection: 'row',
        alignItems: 'center', 
    },
    backButtonText: {
        fontSize: 20,
        marginLeft: 10, 
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
        width: '90%', 
        height: 6, 
        backgroundColor: 'rgba(132, 174, 78, 0.15)', 
        borderRadius: 10, 
    },
    containerCheckbox: {
        width: '100%',
        justifyContent: 'flex-start',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.84,
        elevation: 5, 
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
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
