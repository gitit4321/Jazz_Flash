import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioButton from './radioButton';
import ListenButton from './ListenBtn';
import Staff from './Staff';

const CardBack = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.chordSymbol}>Cmi7</Text>
            <View style={styles.chordSpellingContainer}>
                <View style={styles.subHeaderContainer}>
                    <View>
                        <Text style={styles.subHeaderText}>Chord Spelling</Text>
                    </View>
                </View>
                <View style={styles.staffContainer}>
                    <Staff tonic="C" type="chordSpelling" />

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
                    <View>
                        <RadioButton />
                    </View>
                    <View style={styles.listenBtnContainer}>
                        <ListenButton></ListenButton>
                    </View>
                </View>
            </View>
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
        width: '90%',
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
        width: '90%',
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
});

export default CardBack;
