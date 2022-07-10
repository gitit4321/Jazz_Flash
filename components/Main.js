import { SelectedPitchDataContextProvider } from '../contexts/selected-pitch-data-context';
import { containerStyles } from '../styles/index';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import Card from './Card';

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
