import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import IRManager from 'react-native-ir-manager';
import Button from '../components/button';
import NavCity from '../controls/navcity';
import styles from './styles';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            hasIrEmitter: false
        };
    }

    componentDidMount() {
        // hasIrEmitter
        IRManager.hasIrEmitter().then((hasIrEmitter) => {
            this.setState({ loading: false, hasIrEmitter });
        });
    }

    render() {
        let { hasIrEmitter, loading } = this.state;

        if (loading)
            return (
                <View style={styles.containerCenter}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            );

        if (!hasIrEmitter)
            return (
                <View style={styles.containerCenter}>
                    <Text style={styles.textError}>Device doesn't have IR emitter</Text>
                </View>
            );

        return (
            <View style={styles.container}>
                <View style={styles.rowPower}>
                    <Button power prontoHexCode={NavCity.POWER} icon='power-settings-new'></Button>
                </View>
                <View style={styles.row}>
                    <Button prontoHexCode={NavCity.FRONT_DOWN} icon='remove' text='FRONT'></Button>
                    <Button prontoHexCode={NavCity.SD_USB} icon='sd'></Button>
                    <Button prontoHexCode={NavCity.FRONT_UP} icon='add' text='FRONT'></Button>
                </View>
                <View style={styles.row}>
                    <Button prontoHexCode={NavCity.CEN_DOWN} icon='remove' text='CEN'></Button>
                    <Button prontoHexCode={NavCity.PLAY} icon='play-arrow'></Button>
                    <Button prontoHexCode={NavCity.CEN_UP} icon='add' text='CEN'></Button>
                </View>
                <View style={styles.row}>
                    <Button prontoHexCode={NavCity.SUR_DOWN} icon='remove' text='SUR'></Button>
                    <Button prontoHexCode={NavCity.NEXT} icon='fast-forward'></Button>
                    <Button prontoHexCode={NavCity.SUR_UP} icon='add' text='SUR'></Button>
                </View>
                <View style={styles.row}>
                    <Button prontoHexCode={NavCity.SUB_DOWN} icon='remove' text='SUB'></Button>
                    <Button prontoHexCode={NavCity.BACK} icon='fast-rewind'></Button>
                    <Button prontoHexCode={NavCity.SUB_UP} icon='add' text='SUB'></Button>
                </View>
                <View style={styles.rowSource}>
                    <Button prontoHexCode={NavCity.SOURCE} text='SOURCE'></Button>
                </View>
                <View style={styles.row}>
                    <Button prontoHexCode={NavCity.VOL_UP} icon='volume-plus' type='material-community'></Button>
                </View>
                <View style={[styles.row, { margin: 30 }]}>
                    <Button prontoHexCode={NavCity.RESET} text='RESET'></Button>
                    <Button prontoHexCode={NavCity.MUTE} icon='volume-mute' type='material-community'></Button>
                    <Button prontoHexCode={NavCity.PROLOGIC} text='PROLOGIC'></Button>
                </View>
                <View style={[styles.row, { marginBottom: 40 }]}>
                    <Button prontoHexCode={NavCity.VOL_DOWN} icon='volume-minus' type='material-community'></Button>
                </View>
            </View>
        );
    }
}