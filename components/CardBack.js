import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import RadioButton from './RadioButton';
import ChordSpelling from './ChordSpelling';
import ChordScale from './ChordScale';
import PlaneVoicing59 from './PlaneVoicing59';

const CardBack = props => {
    let tonic = props.tonic;
    const [clef, setClef] = useState('Treble');
    const [clefArr, setClefArr] = useState(['Treble', 'Bass']);

    const handleClefChange = c => {
        setClef(c);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.chordSymbol}>{tonic}mi7</Text>
            <View style={{ paddingBottom: 15 }}>
                <RadioButton
                    clefArr={clefArr}
                    handleClefChange={handleClefChange}
                />
            </View>
            <ScrollView>
                <View style={styles.chordSpellingContainer}>
                    <View style={styles.subHeaderContainer}>
                        <View>
                            <Text style={styles.subHeaderText}>
                                Chord Spelling
                            </Text>
                        </View>
                    </View>
                    <View style={styles.staffContainer}>
                        <ChordSpelling
                            tonic={tonic}
                            clef={clef}
                            type="chordSpelling"
                        />

                        <View style={styles.pitchNameContainer}>
                            <View>
                                <Text style={styles.pitchName}>C</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>Eb</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>G</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>Bb</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>D</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.radioListenContainer}>
                        <View style={styles.listenBtnContainer}>
                            <Button color="black" title="Listen"></Button>
                        </View>
                    </View>
                </View>
                <View style={styles.chordScaleContainer}>
                    <View style={styles.subHeaderContainer}>
                        <View>
                            <Text style={styles.subHeaderText}>
                                Chord/Scale
                            </Text>
                        </View>
                    </View>
                    <View style={styles.staffContainer}>
                        <ChordScale
                            tonic={tonic}
                            clef={clef}
                            type="chordScale"
                        />

                        <View style={styles.pitchNameContainer}>
                            <View>
                                <Text style={styles.pitchName}>C</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>D</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>Eb</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>F</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>G</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>A</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>Bb</Text>
                            </View>
                            <View>
                                <Text style={styles.pitchName}>C</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.radioListenContainer}>
                        <View style={styles.listenBtnContainer}>
                            <Button color="black" title="Listen"></Button>
                        </View>
                    </View>
                    <View style={styles.fullVoiceContainer}>
                        <PlaneVoicing59 />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(180,187,184)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '90%',
        width: '95%',
        borderRadius: 10,
    },
    chordSymbol: {
        fontSize: 50,
        fontWeight: '500',
        textDecorationLine: 'underline',
        marginVertical: 14,
    },
    chordSpellingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    subHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subHeaderText: {
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
    staffContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    pitchNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '77%',
    },
    pitchName: {
        paddingHorizontal: 10,
        fontSize: 18,
    },
    radioListenContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    listenBtnContainer: {
        flex: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 120,
        marginHorizontal: 18,
    },
    fullVoiceContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
    },
});

export default CardBack;
