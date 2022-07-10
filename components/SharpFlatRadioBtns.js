import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';

const SharpFlatRadioBtns = () => {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);
    const [checked, setChecked] = useState(0);
    const accidentalsArr = ['Flats', 'Sharps'];

    const disabled =
        selectedPitchDataCtx.selectedKey.length === 1 ? true : false;

    return (
        <View style={styles.radio}>
            <View style={styles.btn}>
                {accidentalsArr.map((accidental, key) => {
                    return (
                        <View key={accidental}>
                            {checked == key ? (
                                <TouchableOpacity style={styles.btn}>
                                    {disabled ? (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/images/radio_checked_disabled.png')}
                                        />
                                    ) : (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/images/radio_checked.png')}
                                        />
                                    )}
                                    {disabled ? (
                                        <Text style={{ color: 'grey' }}>
                                            {accidental}
                                        </Text>
                                    ) : (
                                        <Text style={{ color: 'black' }}>
                                            {accidental}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        if (!disabled) {
                                            setChecked(key);

                                            selectedPitchDataCtx.onSharpsOrFlatsChange(
                                                accidental
                                            );
                                        }
                                    }}
                                    style={styles.btn}
                                >
                                    {disabled ? (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/images/radio_unchecked_disabled.png')}
                                        />
                                    ) : (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/images/radio_unchecked.png')}
                                        />
                                    )}
                                    {disabled ? (
                                        <Text style={{ color: 'grey' }}>
                                            {accidental}
                                        </Text>
                                    ) : (
                                        <Text style={{ color: 'black' }}>
                                            {accidental}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            )}
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    radio: {
        display: 'flex',
        flexDirection: 'row',
    },
    img: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
});

export default SharpFlatRadioBtns;
