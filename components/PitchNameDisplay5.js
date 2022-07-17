import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';
import { getChordBass, getChordTreble } from '../pitch_data/pitchHandlers';
import { parseSharpsOrFlats } from '../utils/parseSharpsOrFlats';
import { View, Text, Image, StyleSheet } from 'react-native';
import { noteScaleText5 } from '../styles/index';
import React, { useContext } from 'react';

const PitchNameDisplay5 = () => {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);

    let clef = selectedPitchDataCtx.selectedClef.toLowerCase();

    const noteData =
        clef === 'bass'
            ? getChordBass(
                  parseSharpsOrFlats(selectedPitchDataCtx.selectedKey),
                  selectedPitchDataCtx.selectedChordQ
              )
            : getChordTreble(
                  parseSharpsOrFlats(selectedPitchDataCtx.selectedKey),
                  selectedPitchDataCtx.selectedChordQ
              );

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
                        key={'5pitchPair' + key.toString()}
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
        ...noteScaleText5.allNotesContainer,
    },
    allNotesAccidentalOffsetContainer: {
        ...noteScaleText5.allNotesAccidentalOffsetContainer,
    },
    noteNameContainer: {
        ...noteScaleText5.noteNameContainer,
    },
    noteNameAccidentalOffsetContainer: {
        ...noteScaleText5.noteNameAccidentalOffsetContainer,
    },
    pitchNames: {
        ...noteScaleText5.pitchNames,
    },
    sharp: {
        ...noteScaleText5.sharp,
    },
    flat: {
        ...noteScaleText5.flat,
    },
    doubleSharp: {
        ...noteScaleText5.doubleSharp,
    },
    doubleFlat: {
        ...noteScaleText5.doubleFlat,
    },
});

export default PitchNameDisplay5;
