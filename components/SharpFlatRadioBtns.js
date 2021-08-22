import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SharpFlatRadioBtns = props => {
    const [checked, setChecked] = useState(0);
    const accidentalsArr = ['Flats', 'Sharps'];
    const { sharpsFlats, handleSharpsFlatsChange } = props;

    return (
        <View style={styles.radio}>
            <View style={styles.btn}>
                {accidentalsArr.map((accidental, key) => {
                    return (
                        <View key={accidental}>
                            {checked == key ? (
                                <TouchableOpacity style={styles.btn}>
                                    <Image
                                        style={styles.img}
                                        source={require('../assets/radio_checked.png')}
                                    />
                                    <Text>{accidental}</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        setChecked(key);
                                        handleSharpsFlatsChange(accidental);
                                    }}
                                    style={styles.btn}
                                >
                                    <Image
                                        style={styles.img}
                                        source={require('../assets/radio_unchecked.png')}
                                    />
                                    <Text>{accidental}</Text>
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
