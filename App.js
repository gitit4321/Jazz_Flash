import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';
import {
    useDimensions,
    useDeviceOrientation,
} from '@react-native-community/hooks';
import Constants from 'expo-constants';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import KeyBar from './components/KeyBar';
import Main from './components/Main';

export default function App() {
    const tonicArray = [
        'C',
        'C#/Db',
        'D',
        'D#/Eb',
        'E',
        'F',
        'F#/GB',
        'G',
        'G#/Ab',
        'A',
        'A#/Bb',
        'B',
    ];
    const [curTonic, setCurTonic] = useState(tonicArray[0]);

    return (
        <SafeAreaView style={styles.container}>
            {/* <KeyBar /> */}
            {/* <CardFront /> */}
            <CardBack tonic={curTonic} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(57,96,58)',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
});
