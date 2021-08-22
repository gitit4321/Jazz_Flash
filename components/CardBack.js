import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Picker,
    Platform,
} from 'react-native';
import RadioButtons from './RadioButtons';
import ChordSpelling from './ChordSpelling';
import ChordScale from './ChordScale';
import GrandStaff from './GrandStaff';
import ListenBtn from './ListenBtn';
import PickerBar from './PickerBar';

const CardBack = props => {
    let tonic = props.tonic;

    // handle pickers
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedChordQ, setSelectedChordQ] = useState('min7');
    const [selectedClef, setSelectedClef] = useState('Treble');

    const handleKeyChange = c => {
        setSelectedKey(c);
    };
    const handleChordQChange = c => {
        setSelectedChordQ(c);
    };
    const handleClefChange = c => {
        setSelectedClef(c);
    };

    // <RadioButton clefArr={clefArr} handleClefChange={handleClefChange} />

    return (
        <View style={styles.primaryContainer}>
            <Text style={styles.chordSymbol}>{selectedKey}mi7</Text>
            <PickerBar
                selectedKey={selectedKey}
                selectedChordQ={selectedChordQ}
                selectedClef={selectedClef}
                handleKeyChange={handleKeyChange}
                handleChordQChange={handleChordQChange}
                handleClefChange={handleClefChange}
            />
            <ScrollView>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Spelling</Text>
                    <ChordSpelling tonic={selectedKey} clef={selectedClef} />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Scale</Text>
                    <ChordScale tonic={selectedKey} clef={selectedClef} />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.horizontalContainer}>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            5/9 Plane Voicing
                        </Text>
                        <GrandStaff tonic={selectedKey} voicingType="59" />
                        <ListenBtn title="listen" />
                    </View>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            Rootless CED Voicing
                        </Text>
                        <GrandStaff tonic={selectedKey} voicingType="CED" />
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
    pickerContainer: {
        display: 'flex',
        height: '8%',
        marginBottom: 25,
        justifyContent: 'space-evenly',
        // backgroundColor: 'teal',
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
