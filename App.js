import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import Main from './components/Main';
import { OrientationProvider } from './contexts/orientation-context';

export default function App() {
    return (
        <React.StrictMode>
            <OrientationProvider>
                <SafeAreaView style={styles.container}>
                    <Main />
                </SafeAreaView>
            </OrientationProvider>
        </React.StrictMode>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(222,222,222)',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
});
