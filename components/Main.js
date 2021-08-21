import React, { useState } from 'react';
import { View } from 'react-native';
import CardBack from './CardBack';
import KeyBar from './KeyBar';

const Main = () => {
    const keyArray = [
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
    const [curKey, setCurKey] = useState(keyArray[0]);

    return (
        <View>
            <KeyBar />
            {/* <CardFront /> */}
            <CardBack />
        </View>
    );
};

export default Main;
