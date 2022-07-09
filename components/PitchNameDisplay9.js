import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getScaleTreble, getScaleBass } from '../pitch_data/pitchHandlers';
import { noteScaleText9 } from '../styles/index';

const PitchNameDisplay9 = props => {
    const { tonic, internalScaleName, clef } = props;

    const noteData =
        clef === 'bass'
            ? getScaleBass(tonic, internalScaleName)
            : getScaleTreble(tonic, internalScaleName);

    const pitchAccidentalData = [];

    for (let i = 0; i < noteData.length; i++) {
        let pitchName = noteData[i][0].split('/')[0].toUpperCase();
        let accidental = noteData[i][1];
        let pitchAccidentalPair = {};
        pitchAccidentalPair.pitchName = pitchName;
        pitchAccidentalPair.accidental = accidental;
        pitchAccidentalData.push(pitchAccidentalPair);
    }

    // check is the first pitch has an accidental or not (to handle all notes being pushed to the right)
    const isFirstPitchAccdidental =
        pitchAccidentalData[0]['accidental'] !== 0 ? true : false;

    return (
        // main container
        <View
            style={[
                isFirstPitchAccdidental == true
                    ? styles.allNotesAccidentalOffsetContainer
                    : styles.allNotesContainer,
            ]}
        >
            {pitchAccidentalData.map((pitchPair, key) => {
                return (
                    // each noteName's container
                    <View
                        key={'8pitchPair' + key.toString()}
                        style={
                            isFirstPitchAccdidental == true
                                ? styles.noteNameAccidentalOffsetContainer
                                : styles.noteNameContainer
                        }
                    >
                        <Text
                            key={'pitchName' + key.toString()}
                            style={[
                                styles.pitchNames,
                                styles.firstPitchAccidentalAdjust,
                            ]}
                        >
                            {pitchPair.pitchName}
                        </Text>

                        {pitchPair.accidental === -1 && (
                            <Image
                                key={'flat' + key.toString()}
                                style={[
                                    styles.flat,
                                    styles.firstPitchAccidentalAdjust,
                                ]}
                                source={require('../assets/images/flat.png')}
                            ></Image>
                        )}
                        {pitchPair.accidental === 1 && (
                            <Image
                                key={'sharp' + key.toString()}
                                style={styles.sharp}
                                source={require('../assets/images/sharp.png')}
                            ></Image>
                        )}
                        {pitchPair.accidental === -2 && (
                            <Image
                                key={'doubleFlat' + key.toString()}
                                style={styles.doubleFlat}
                                source={require('../assets/images/double_flat.png')}
                            ></Image>
                        )}
                        {pitchPair.accidental === 2 && (
                            <Image
                                key={'doubleSharp' + key.toString()}
                                style={styles.doubleSharp}
                                source={require('../assets/images/double_sharp.png')}
                            ></Image>
                        )}
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    allNotesContainer: {
        ...noteScaleText9.allNotesContainer,
    },
    allNotesAccidentalOffsetContainer: {
        ...noteScaleText9.allNotesAccidentalOffsetContainer,
    },
    noteNameContainer: {
        ...noteScaleText9.noteNameContainer,
    },
    noteNameAccidentalOffsetContainer: {
        ...noteScaleText9.noteNameAccidentalOffsetContainer,
    },
    pitchNames: {
        ...noteScaleText9.pitchNames,
    },
    sharp: {
        ...noteScaleText9.sharp,
    },
    flat: {
        ...noteScaleText9.flat,
    },
    doubleSharp: {
        ...noteScaleText9.doubleSharp,
    },
    doubleFlat: {
        ...noteScaleText9.doubleFlat,
    },
});

export default PitchNameDisplay9;
