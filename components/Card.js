import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker } from 'react-native';
import SharpFlatRadioBtns from './SharpFlatRadioBtns';
import ChordSpelling from './ChordSpelling';
import ChordScale from './ChordScale';
// import GrandStaff from './GrandStaff';
import ListenBtn from './ListenBtn';
import PickerBar from './PickerBar';

const CardBack = props => {
    const {
        selectedKey,
        selectedChordQ,
        selectedClef,
        selectedScaleType,
        sharpsFlats,
        handleKeyChange,
        handleChordQChange,
        handleClefChange,
        handleSharpsFlatsChange,
        handleScaleTypeChange,
    } = props;

    function parseSharpsOrFlats(key) {
        if (key.length > 1) {
            let splitKeyName = key.split('/');
            return sharpsFlats === 'Sharps' ? splitKeyName[0] : splitKeyName[1];
        } else {
            return key;
        }
    }

    return (
        <View style={styles.primaryContainer}>
            <Text style={styles.chordSymbol}>
                {parseSharpsOrFlats(selectedKey)}
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
                    <Text style={styles.sectionHeader}>Chord Scale</Text>
                    <ChordScale
                        tonic={parseSharpsOrFlats(selectedKey)}
                        chordQ={selectedChordQ}
                        selectedScaleType={selectedScaleType}
                        clef={selectedClef}
                    />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>Chord Spelling</Text>
                    <ChordSpelling
                        tonic={parseSharpsOrFlats(selectedKey)}
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
                        {/* <GrandStaff
                            tonic={parseSharpsOrFlats(selectedKey)}
                            chordQ={selectedChordQ}
                            voicingType="59"
                        /> */}
                        <ListenBtn title="listen" />
                    </View>
                    <View style={[styles.verticalContainer, styles.grandStaff]}>
                        <Text style={styles.sectionHeader}>
                            Rootless CED Voicing
                        </Text>
                        {/* <GrandStaff
                            tonic={parseSharpsOrFlats(selectedKey)}
                            chordQ={selectedChordQ}
                            voicingType="CED"
                        /> */}
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
        // backgroundColor: 'rgb(180,187,184)',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
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
