import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import RadioButton from './RadioButton';
import ChordSpelling from './ChordSpelling';
import ChordScale from './ChordScale';
import GrandStaff from './GrandStaff';
import ListenBtn from './ListenBtn';

const CardBack = props => {
    let tonic = props.tonic;
    const [clef, setClef] = useState('Treble');
    const [clefArr, setClefArr] = useState(['Treble', 'Bass']);

    const handleClefChange = c => {
        setClef(c);
    };

    // <RadioButton clefArr={clefArr} handleClefChange={handleClefChange} />

    return (
        <View style={styles.primaryContainer}>
            <Text style={styles.chordSymbol}>{tonic}mi7</Text>
            <ScrollView>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Spelling</Text>
                    <ChordSpelling tonic={'C'} clef={clef} />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Scale</Text>
                    <ChordScale tonic={'C'} clef={clef} />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.horizontalContainer}>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            5/9 Plane Voicing
                        </Text>
                        <GrandStaff tonic={'C'} voicingType="59" />
                        <ListenBtn title="listen" />
                    </View>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            Rootless CED Voicing
                        </Text>
                        <GrandStaff tonic={'C'} />
                        <ListenBtn title="listen" />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    primaryContainer: {
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
    verticalContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    horizontalContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    grandStaff: {
        width: '50%',
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineBreak: {
        backgroundColor: 'grey',
        height: 1,
        width: '80%',
        marginBottom: 15,
    },
});

export default CardBack;
