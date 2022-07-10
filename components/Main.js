import React from 'react';
import { View, StyleSheet } from 'react-native';
import { containerStyles } from '../styles/index';
import Card from './Card';
import { SelectedPitchDataContextProvider } from '../contexts/selected-pitch-data-context';

const Main = () => {
    return (
        <View style={styles.cardContainer}>
            <SelectedPitchDataContextProvider>
                <Card />
            </SelectedPitchDataContextProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        ...containerStyles.cardContainer,
    },
});

export default Main;
