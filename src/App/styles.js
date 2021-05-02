import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },

    rowPower: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 10
    },
    rowSource: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 70,
        paddingLeft: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },

    textError: {
        fontSize: 25,
        color: 'white'
    }
});

export default styles;