import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { containerStyles } from '../styles/index';
import CardBack from './CardBack';
import KeyBar from './KeyBar';

const Main = () => {
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
        <View style={styles.cardContainer}>
            {/* <KeyBar /> */}
            {/* <CardFront /> */}
            <CardBack tonic={curTonic} />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        ...containerStyles.cardContainer,
    },
});

export default Main;
