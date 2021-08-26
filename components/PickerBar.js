import React from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { getFirstInternalScaleName } from '../pitch_data/pitchHandlers';

const PickerBar = props => {
    const {
        selectedKey,
        selectedChordQ,
        selectedClef,
        internalScaleName,
        scaleOptions,
        displayScaleName,
        handleKeyChange,
        handleChordQChange,
        handleClefChange,
        handleScaleOptionsChange,
        handleInternalScaleNameChange,
        handleDisplayScaleNameChange,
    } = props;

    const keys = [
        'C',
        'C#/Db',
        'D',
        'D#/Eb',
        'E',
        'F',
        'F#/Gb',
        'G',
        'G#/Ab',
        'A',
        'A#/Bb',
        'B',
    ];

    const chords = [
        '6/9',
        'maj7',
        'maj7(#11)',
        'maj7(b6)',
        'min6/9',
        'min(maj7)',
        'min7',
        '7',
        '7(#11)',
        '7(b5/#5)',
        '7(b9/b13)',
        '13(b9)',
        '7(#9/#5)',
        '7(b9/#9/b13)',
        '7(b9/#11)',
        'min7(b5)',
        'min9(b5)',
        'dim7',
    ];

    const primaryChordScales = [
        'Major/Ionian',
        'Major/Ionian',
        'Lydian',
        'Harmonic Major',
        'Melodic Minor',
        'Melodic Minor',
        'Dorian',
        'Mixolydian',
        'Lydian Dominant',
        'Whole Tone',
        '5th Mode Harmonic Minor',
        '5th Mode Harmonic Major',
        'Super Locrian',
        'Phrygian',
        'Locrian',
        'Locrian #2',
        '2nd Mode Harmonic Minor',
        'Half Whole Diminished',
    ];

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <View style={[styles.horizontalContainer]}>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Root</Text>
                    <Picker
                        selectedValue={selectedKey}
                        style={styles.picker}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            handleKeyChange(itemValue);
                        }}
                    >
                        {keys.map((k, key) => {
                            return (
                                <Picker.Item key={key} label={k} value={k} />
                            );
                        })}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Chord</Text>
                    <Picker
                        selectedValue={selectedChordQ}
                        style={[styles.picker, styles.chordQpicker]}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            handleChordQChange(itemValue);
                            handleScaleOptionsChange(itemValue);
                            handleInternalScaleNameChange(
                                getFirstInternalScaleName(itemValue)
                            );
                            handleDisplayScaleNameChange(
                                primaryChordScales[itemIndex]
                            );
                        }}
                    >
                        {chords.map((chord, key) => {
                            return (
                                <Picker.Item
                                    key={key}
                                    label={chord}
                                    value={chord}
                                />
                            );
                        })}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Clef</Text>
                    <Picker
                        selectedValue={selectedClef}
                        style={styles.picker}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                            handleClefChange(itemValue)
                        }
                    >
                        <Picker.Item label="Treble" value="Treble" />
                        <Picker.Item label="Bass" value="Bass" />
                    </Picker>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    horizontalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    pickerContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16,
        alignItems: 'center',
    },
    picker: {
        height: 50,
        width: 108,
    },
    pickerLabel: {
        fontSize: 18,
        fontWeight: '500',
    },
    chordQpicker: {
        height: 50,
        width: 155,
    },
});

export default PickerBar;
