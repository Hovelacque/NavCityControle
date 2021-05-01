import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Button,
} from 'react-native';
import IRManager, { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager';


export default class APP extends Component {

  hasIrEmitter() {
    IRManager.hasIrEmitter()
      .then(hasIrEmitter => console.log(hasIrEmitter ? 'Device has IR emitter' : "Device doesn't have IR emitter"));
  }

  getCarrierFrequencies() {
    IRManager.getCarrierFrequencies()
      .then(console.log)
      .catch(console.log);
  }

  transmitProntoCode(prontoHexCode) {
    IRManager.transmitProntoCode(prontoHexCode)
      .then(console.log)
      .catch(console.log);
  }

  render() {
    const SAMSUNG_TURN_ON_PRONTO_CODE = '0000 006d 0022 0003 00a9 00a8 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 003f 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 003f 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0015 0040 0015 0015 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 003f 0015 0702 00a9 00a8 0015 0015 0015 0e6e';

    return (
      <View>
        <Button onPress={this.hasIrEmitter} title="Has IR Emitter Support?" />
        <Button onPress={this.getCarrierFrequencies} title="Log Carrier Frequencies" />
        <Button onPress={() => this.transmitProntoCode(SAMSUNG_TURN_ON_PRONTO_CODE)} title="Turn on Samsung TV" />
      </View>
    );
  }
}