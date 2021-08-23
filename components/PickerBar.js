import React, { useState } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

const PickerBar = props => {
    const {
        selectedKey,
        selectedChordQ,
        selectedClef,
        handleKeyChange,
        handleChordQChange,
        handleClefChange,
        handleScaleTypeChange,
    } = props;

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
                        <Picker.Item label="C" value="C" />
                        <Picker.Item label="C#/Db" value="C#/Db" />
                        <Picker.Item label="D" value="D" />
                        <Picker.Item label="D#/Eb" value="D#/Eb" />
                        <Picker.Item label="E" value="E" />
                        <Picker.Item label="F" value="F" />
                        <Picker.Item label="F#/Gb" value="F#/Gb" />
                        <Picker.Item label="G" value="G" />
                        <Picker.Item label="G#/Ab" value="G#/Ab" />
                        <Picker.Item label="A" value="A" />
                        <Picker.Item label="A#/Bb" value="A#/Bb" />
                        <Picker.Item label="B" value="B" />
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedChordQ}
                        style={[styles.picker, styles.chordQpicker]}
                        itemStyle={{
                            height: 50,
                            // width: 150,
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                            handleChordQChange(itemValue)
                        }
                    >
                        <Picker.Item label="maj7" value="maj7" />
                        <Picker.Item label="min7" value="min7" />
                        <Picker.Item label="6/9" value="6/9" />
                        <Picker.Item label="min6/9" value="min6/9" />
                        <Picker.Item label="min(maj7)" value="min(maj7)" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="min7(b5)" value="min7(b5)" />
                        <Picker.Item label="min9(b5)" value="min9(b5)" />
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
