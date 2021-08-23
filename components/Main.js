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
    //getScaleName(selectedChordQ);

    const [internalScaleName, setInternalScaleName] = useState('major');
    const handleInternalScaleNameChange = scaleName => {
        setInternalScaleName(scaleName);
    };

    // let allChords = getAllChordScaleData();
    // let ids = [];
    // let displayNames = [];
    // console.log(
    //     '--------------------------------------------------------------------'
    // );

    // for (const chord in allChords) {
    //     console.log(chord);
    //     let chords = allChords[chord];
    //     for (const [key, value] of Object.entries(chords)) {
    //         // console.log('KEY: ', key);
    //         // console.log('VALUE: ', value);
    //         if (key === 'id') {
    //             ids.push(value);
    //         }
    //         if (key === 'chordScaleName') {
    //             displayNames.push(value);
    //         }
    // console.log('IDS: ', ids);
    // console.log('displayNames: ', displayNames);
    // for (const id in chords) {
    //     console.log(chords[id]);
    // }
    //     }
    // }

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
