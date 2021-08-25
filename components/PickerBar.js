import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {
    getFirstInternalScaleName,
    getAllChordScaleData,
} from '../pitch_data/pitchHandlers';

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
        'maj7',
        'min7',
        '6/9',
        '7',
        'min6/9',
        'min(maj7)',
        'min7(b5)',
        'min9(b5)',
    ];

    const primaryChordScales = [
        'Major/Ionian',
        'Dorian',
        'Major/Ionian',
        'Mixolydian',
        'Melodic Minor',
        'Locrian',
        'Locrian #2',
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
                    <Picker
                        selectedValue={selectedKey}
                        style={styles.picker}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                            handleKeyChange(itemValue)
                        }
                    >
                        {keys.map((k, key) => {
                            return (
                                <Picker.Item key={key} label={k} value={k} />
                            );
                        })}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
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
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    picker: {
        height: 50,
        width: 108,
    },
    chordQpicker: {
        height: 50,
        width: 140,
    },
});

export default PickerBar;
