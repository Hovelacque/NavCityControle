import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import IRManager from 'react-native-ir-manager';

import NavCity from '../controls/navcity';
import styles from './styles';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasIrEmitter: false
        };
    }

    componentDidMount() {
        // hasIrEmitter
        IRManager.hasIrEmitter().then((hasIrEmitter) => {
            this.setState({ hasIrEmitter });
        });
    }

    transmitProntoCode(prontoHexCode) {
        IRManager.transmitProntoCode(prontoHexCode)
            .then(console.log)
            .catch(console.log);
    }

    render() {
        let { hasIrEmitter } = this.state;

        if (!hasIrEmitter)
            return (
                <View style={styles.containerError}>
                    <Text style={styles.textError}>Device doesn't have IR emitter</Text>
                </View>
            );

        return (
            <View style={styles.container}>
                {/* <View style={styles.row}>
                    <TouchableOpacity style={{
                        backgroundColor:'red',
                        width: 30
                    }}>
                        <Text>P</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={style.row}></View>
                <View style={style.row}></View> */}
                <View style={{
                    margin: 5
                }}>
                    <Button onPress={() => this.transmitProntoCode(NavCity.POWER)} title="POWER" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.SOURCE)} title="SOURCE" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.VOL_UP)} title="VOL_UP" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.VOL_DOWN)} title="VOL_DOWN" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.RESET)} title="RESET" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.PROLOGIC)} title="PROLOGIC" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.FRONT_DOWN)} title="FRONT_DOWN" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.SD_USB)} title="SD_USB" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.FRONT_UP)} title="FRONT_UP" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.CEN_DOWN)} title="CEN_DOWN" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.PLAY)} title="PLAY" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.CEN_UP)} title="CEN_UP" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.SUR_DOWN)} title="SUR_DOWN" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.SUR_UP)} title="SUR_UP" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.SUB_DOWN)} title="SUB_DOWN" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.SUB_UP)} title="SUB_UP" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.BACK)} title="BACK" />
                    <Button onPress={() => this.transmitProntoCode(NavCity.MUTE)} title="MUTE" />
                </View>
                <View style={{
                    margin: 5
                }}>
                    <Button onPress={this.hasIrEmitter} title="Has IR Emitter Support?" />
                    <Button onPress={this.getCarrierFrequencies} title="Log Carrier Frequencies" />
                </View>
            </View>
        );
    }
}