import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';
import {
    useDimensions,
    useDeviceOrientation,
} from '@react-native-community/hooks';
import Constants from 'expo-constants';
import Main from './components/Main';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Main />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(222,222,222)',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
});
