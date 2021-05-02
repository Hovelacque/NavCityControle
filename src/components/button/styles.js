import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonPower: {
        backgroundColor: 'red',
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    text: {
        fontSize: 12,
        marginTop: 5,
        color: 'white'
    }
});

export default styles;