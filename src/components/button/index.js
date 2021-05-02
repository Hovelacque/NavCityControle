import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import IRManager from 'react-native-ir-manager';
import styles from './styles';

const Button = ({ icon, type = 'material', power, prontoHexCode, text }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={power ? styles.buttonPower : styles.button}
                onPress={() => {
                    IRManager.transmitProntoCode(prontoHexCode)
                        .then(console.log)
                        .catch(console.log);
                }}
            >
                <Icon name={icon} type={type} />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default Button;