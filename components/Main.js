import { SelectedPitchDataContextProvider } from '../contexts/selected-pitch-data-context';
import { containerStyles } from '../styles/index';
import { View, StyleSheet, Button } from 'react-native';
import React from 'react';
import Card from './Card';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-native-piano';
import { Dimensions } from 'react-native';
import { handleaudio } from '../assets/audio/audio_build_file';

const stopPlaying = () => {
    console.log('Stopping');
};
const startPlaying = () => {
    console.log('Starting');
};

const Main = () => {
    return (
        <Piano
            noteRange={{ first: 'c4', last: 'c5' }}
            onPlayNoteInput={handleaudio}
            onStopNoteInput={stopPlaying}
        />
    );
};

// const Main = () => {
//     return (
//         <View style={styles.cardContainer}>
//             <SelectedPitchDataContextProvider>
//                 <Card />
//             </SelectedPitchDataContextProvider>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    cardContainer: {
        ...containerStyles.cardContainer,
    },
});

export default Main;
