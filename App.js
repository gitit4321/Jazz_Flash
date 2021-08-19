import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';
import {
    useDimensions,
    useDeviceOrientation,
} from '@react-native-community/hooks';
import Constants from 'expo-constants';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import TonicBar from './components/TonicBar';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <TonicBar />
            {/* <CardFront /> */}
            <CardBack />
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
