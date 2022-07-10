import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getFirstInternalScaleName } from '../pitch_data/pitchHandlers';
import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';

const PickerBar = () => {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);

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
        'Half Whole Diminished',
        'Locrian',
        'Locrian #2',
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
                        selectedValue={selectedPitchDataCtx.selectedKey}
                        style={styles.picker}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            selectedPitchDataCtx.onKeyChange(itemValue);
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
                        selectedValue={selectedPitchDataCtx.selectedChordQ}
                        style={[styles.picker, styles.chordQpicker]}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) => {
                            selectedPitchDataCtx.onChordQualityChange(
                                itemValue
                            );
                            selectedPitchDataCtx.onScaleOptionsChange(
                                itemValue
                            );
                            selectedPitchDataCtx.onInternalScaleNameChange(
                                getFirstInternalScaleName(itemValue)
                            );
                            selectedPitchDataCtx.onDisplayScaleNameChange(
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
                        selectedValue={selectedPitchDataCtx.selectedClef}
                        style={styles.picker}
                        itemStyle={{
                            height: 50,
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                            selectedPitchDataCtx.onClefChange(itemValue)
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
