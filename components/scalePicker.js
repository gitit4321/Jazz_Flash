import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Picker } from 'react-native';

const ScalePicker = props => {
    const { scaleOptions, handleInternalScaleNameChange } = props;

    const [selectedValue, setSelectedValue] = useState('major');

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                itemStyle={{
                    height: 50,
                }}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                    handleInternalScaleNameChange(itemValue);
                }}
            >
                {scaleOptions.map((scale, key) => {
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
