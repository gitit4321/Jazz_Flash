import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RadioButtons from './RadioButtons';
import SharpFlatRadioBtns from './SharpFlatRadioBtns';
import ChordSpelling from './ChordSpelling';
import ChordScale from './ChordScale';
import GrandStaff from './GrandStaff';
import ListenBtn from './ListenBtn';
import PickerBar from './PickerBar';

const CardBack = props => {
    let tonic = props.tonic;

    // pickers
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedChordQ, setSelectedChordQ] = useState('maj7');
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

    // radio btns
    const [sharpsFlats, setSharpsFlats] = useState('Flats');
    const handleSharpsFlatsChange = sf => {
        setShartpsFlats(c);
    };

    return (
        <View style={styles.primaryContainer}>
            <Text style={styles.chordSymbol}>
                {selectedKey}
                {selectedChordQ}
            </Text>
            <PickerBar
                selectedKey={selectedKey}
                selectedChordQ={selectedChordQ}
                selectedClef={selectedClef}
                handleKeyChange={handleKeyChange}
                handleChordQChange={handleChordQChange}
                handleClefChange={handleClefChange}
            />
            <SharpFlatRadioBtns
                sharpsFlats={sharpsFlats}
                handleSharpsFlatsChange={handleSharpsFlatsChange}
            />
            <ScrollView>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Spelling</Text>
                    <ChordSpelling
                        tonic={selectedKey}
                        chordQ={selectedChordQ}
                        clef={selectedClef}
                    />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Scale</Text>
                    <ChordScale
                        tonic={selectedKey}
                        chordQ={selectedChordQ}
                        clef={selectedClef}
                    />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.horizontalContainer}>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            5/9 Plane Voicing
                        </Text>
                        <GrandStaff
                            tonic={selectedKey}
                            chordQ={selectedChordQ}
                            voicingType="59"
                        />
                        <ListenBtn title="listen" />
                    </View>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            Rootless CED Voicing
                        </Text>
                        <GrandStaff
                            tonic={selectedKey}
                            chordQ={selectedChordQ}
                            voicingType="CED"
                        />
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
