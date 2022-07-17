import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useContext } from 'react';

const ScalePicker = () => {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);

    const [selectedValue, setSelectedValue] = useState('major');
    const values = [];
    const labels = [];

    for (let i = 0; i < selectedPitchDataCtx.scaleOptions.length; i++) {
        values.push(selectedPitchDataCtx.scaleOptions[i].programUse);
        labels.push(selectedPitchDataCtx.scaleOptions[i].userDisplay);
    }

    return (
        <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Scale</Text>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                itemStyle={{
                    height: 50,
                }}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);

                    selectedPitchDataCtx.onInternalScaleNameChange(itemValue);
                    selectedPitchDataCtx.onDisplayScaleNameChange(
                        labels[itemIndex]
                    );
                }}
            >
                {selectedPitchDataCtx.scaleOptions.map((scale, key) => {
                    return (
                        <Picker.Item
                            key={key}
                            label={scale.userDisplay}
                            value={scale.programUse}
                        />
                    );
                })}
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
        flexDirection: 'column',
        marginBottom: 16,
        alignItems: 'center',
    },
    pickerLabel: {
        fontSize: 18,
        fontWeight: '500',
    },
    picker: {
        height: 50,
        width: 280,
    },
});

export default ScalePicker;
