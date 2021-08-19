import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RadioButtons = () => {
    const [checked, setChecked] = useState(0);
    var clef = ['Treble', 'Bass'];
    return (
        <View>
            <View style={styles.btn}>
                {clef.map((clef, key) => {
                    return (
                        <View key={clef}>
                            {checked == key ? (
                                <TouchableOpacity style={styles.btn}>
                                    <Image
                                        style={styles.img}
                                        source={require('../assets/radio_checked.png')}
                                    />
                                    <Text>{clef}</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        setChecked(key);
                                    }}
                                    style={styles.btn}
                                >
                                    <Image
                                        style={styles.img}
                                        source={require('../assets/radio_unchecked.png')}
                                    />
                                    <Text>{clef}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    );
                })}
            </View>
            {/* <Text>{clef[checked]}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    radio: {
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
    },
});

export default RadioButtons;
