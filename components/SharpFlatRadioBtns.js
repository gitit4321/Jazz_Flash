import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SharpFlatRadioBtns = props => {
    const [checked, setChecked] = useState(0);
    const accidentalsArr = ['Flats', 'Sharps'];
    const { handleSharpsFlatsChange, selectedKey } = props;
    const disabled = selectedKey.length === 1 ? true : false;

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
                                            source={require('../assets/radio_checked_disabled.png')}
                                        />
                                    ) : (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/radio_checked.png')}
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
                                            handleSharpsFlatsChange(accidental);
                                        }
                                    }}
                                    style={styles.btn}
                                >
                                    {disabled ? (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/radio_unchecked_disabled.png')}
                                        />
                                    ) : (
                                        <Image
                                            style={styles.img}
                                            source={require('../assets/radio_unchecked.png')}
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
