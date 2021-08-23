import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { containerStyles } from '../styles/index';
import Card from './Card';
import { getScaleName, getInternalScaleName } from './pitch_data/pitchHandlers';

const Main = () => {
    // picker states
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedChordQ, setSelectedChordQ] = useState('maj7');
    const [selectedScaleType, setSelectedScaleType] = useState('major');
    const [selectedClef, setSelectedClef] = useState('Treble');

    // picker handlers
    const handleKeyChange = c => {
        setSelectedKey(c);
    };
    const handleChordQChange = c => {
        setSelectedChordQ(c);
    };
    const handleClefChange = c => {
        setSelectedClef(c);
    };
    const handleScaleTypeChange = c => {
        setSelectedScaleType(c);
    };

    // radio btn state and handler
    const [sharpsFlats, setSharpsFlats] = useState('Flats');
    const handleSharpsFlatsChange = sf => {
        setSharpsFlats(sf);
    };

    const scaleNameDisplay = getScaleName(selectedChordQ);
    const internalScaleName = getInternalScaleName(selectedChordQ);

    return (
        <View style={styles.cardContainer}>
            <Card
                selectedKey={selectedKey}
                selectedChordQ={selectedChordQ}
                selectedClef={selectedClef}
                selectedScaleType={selectedScaleType}
                sharpsFlats={sharpsFlats}
                scaleNameDisplay={scaleNameDisplay}
                internalScaleName={internalScaleName}
                handleKeyChange={handleKeyChange}
                handleChordQChange={handleChordQChange}
                handleClefChange={handleClefChange}
                handleSharpsFlatsChange={handleSharpsFlatsChange}
                handleScaleTypeChange={handleScaleTypeChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        ...containerStyles.cardContainer,
    },
});

export default Main;
