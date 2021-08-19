import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioButton from './radioButton';
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
                    <View>
                        <RadioButton />
                    </View>
                </View>
                <View style={styles.staffContainer}>
                    <Staff tonic="C" type="chordSpelling" />
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
        justifyContent: 'space-between',
        height: '90%',
        width: '90%',
        borderRadius: 10,
    },
    chordSpellingContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    subHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chordSymbol: {
        fontSize: 50,
        fontWeight: '500',
        textDecorationLine: 'underline',
        marginTop: 14,
    },
    subHeaderText: {
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
    staffContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default CardBack;
