import React, { useState } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

const ScalePicker = props => {
    const {
        selectedChordQ,
        selectedScaleType,
        handleChordQChange,
        handleScaleTypeChange,
    } = props;

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={selectedChordQ}
                style={styles.picker}
                itemStyle={{
                    height: 50,
                }}
                onValueChange={(itemValue, itemIndex) =>
                    handleChordQChange(itemValue)
                }
            >
                <Picker.Item label="Major/Ionian" value="maj7" />
            </Picker>
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
        width: 250,
    },
});

export default ScalePicker;
