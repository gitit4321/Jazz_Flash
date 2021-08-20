import React, { useState } from 'react';
import { View } from 'react-native';
import CardBack from './CardBack';
import KeyBar from './KeyBar';

const Main = () => {
    return (
        <View>
            <KeyBar />
            {/* <CardFront /> */}
            <CardBack />
        </View>
    );
};

export default Main;
