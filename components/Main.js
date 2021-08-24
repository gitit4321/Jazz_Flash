import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { containerStyles } from '../styles/index';
import Card from './Card';
import {
    getChordScaleOptions,
    getAllChordScaleData,
} from '../pitch_data/pitchHandlers';

const Main = () => {
    // picker bar states
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedChordQ, setSelectedChordQ] = useState('maj7');
    const [selectedScaleType, setSelectedScaleType] = useState('major');
    const [selectedClef, setSelectedClef] = useState('Treble');

    // picker bar handlers
    const handleKeyChange = k => {
        setSelectedKey(k);
    };
    const handleChordQChange = chordQuality => {
        setSelectedChordQ(chordQuality);
    };
    const handleClefChange = clef => {
        setSelectedClef(clef);
    };
    const handleScaleTypeChange = c => {
        setSelectedScaleType(c);
    };

    // radio btn state and handler
    const [sharpsFlats, setSharpsFlats] = useState('Flats');
    const handleSharpsFlatsChange = sf => {
        setSharpsFlats(sf);
    };

    // scale option picker state and handler
    const [scaleOptions, setScaleOptions] = useState([
        {
            userDisplay: 'Major/Ionian',
            programUse: 'major',
        },
        {
            userDisplay: 'Major Pentatonic',
            programUse: 'majorPentatonic',
        },
    ]);

    const handleScaleOptionsChange = chordQuality => {
        const chordScaleOptions = getChordScaleOptions(chordQuality);
        setScaleOptions(chordScaleOptions);
    };

    // scale display variables
    const [displayScaleName, setDisplayScaleName] = useState('Major/Ionian');
    const handleDisplayScaleNameChange = scaleName => {
        setDisplayScaleName(scaleName);
    };

    const [internalScaleName, setInternalScaleName] = useState('major');
    const handleInternalScaleNameChange = scaleName => {
        setInternalScaleName(scaleName);
    };

    return (
        <View style={styles.cardContainer}>
            <Card
                selectedKey={selectedKey}
                selectedChordQ={selectedChordQ}
                selectedClef={selectedClef}
                selectedScaleType={selectedScaleType}
                sharpsFlats={sharpsFlats}
                displayScaleName={displayScaleName}
                internalScaleName={internalScaleName}
                scaleOptions={scaleOptions}
                handleKeyChange={handleKeyChange}
                handleChordQChange={handleChordQChange}
                handleClefChange={handleClefChange}
                handleSharpsFlatsChange={handleSharpsFlatsChange}
                handleScaleTypeChange={handleScaleTypeChange}
                handleScaleOptionsChange={handleScaleOptionsChange}
                handleInternalScaleNameChange={handleInternalScaleNameChange}
                handleDisplayScaleNameChange={handleDisplayScaleNameChange}
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
