import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SharpFlatRadioBtns from './SharpFlatRadioBtns';
import ChordSpelling from './ChordSpelling';
import ChordScale from './ChordScale';
import GrandStaff from './GrandStaff';
import ListenBtn from './ListenBtn';
import PickerBar from './PickerBar';
import ScalePicker from './ScalePicker';
import PitchNameDisplay5 from './PitchNameDisplay5';
import PitchNameDisplay6 from './PitchNameDisplay6';
import PitchNameDisplay8 from './PitchNameDisplay8';
import PitchNameDisplay9 from './PitchNameDisplay9';

const CardBack = props => {
    const {
        selectedKey,
        selectedChordQ,
        selectedClef,
        sharpsFlats,
        displayScaleName,
        selectedScaleType,
        internalScaleName,
        scaleOptions,
        handleKeyChange,
        handleChordQChange,
        handleClefChange,
        handleSharpsFlatsChange,
        handleScaleTypeChange,
        handleScaleOptionsChange,
        handleInternalScaleNameChange,
        handleDisplayScaleNameChange,
    } = props;

    const scaleLength6 = ['majorPentatonic', 'minorPentatonic'];
    const scaleLength9 = ['halfWholeDiminished', 'wholeHalfDiminished'];

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
                selectedScaleType={selectedScaleType}
                scaleOptions={scaleOptions}
                internalScaleName={internalScaleName}
                displayScaleName={displayScaleName}
                handleKeyChange={handleKeyChange}
                handleChordQChange={handleChordQChange}
                handleClefChange={handleClefChange}
                handleInternalScaleNameChange={handleInternalScaleNameChange}
                handleScaleTypeChange={handleScaleTypeChange}
                handleScaleOptionsChange={handleScaleOptionsChange}
                handleDisplayScaleNameChange={handleDisplayScaleNameChange}
            />
            <ScalePicker
                selectedChordQ={selectedChordQ}
                selectedScaleType={selectedScaleType}
                scaleOptions={scaleOptions}
                handleChordQChange={handleChordQChange}
                handleScaleTypeChange={handleScaleTypeChange}
                handleScaleOptionsChange={handleScaleOptionsChange}
                handleInternalScaleNameChange={handleInternalScaleNameChange}
                handleDisplayScaleNameChange={handleDisplayScaleNameChange}
            />
            <SharpFlatRadioBtns
                sharpsFlats={sharpsFlats}
                handleSharpsFlatsChange={handleSharpsFlatsChange}
                selectedKey={selectedKey}
            />
            <ScrollView>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>
                        {parseSharpsOrFlats(selectedKey)} {displayScaleName}{' '}
                        Scale
                    </Text>

                    <ChordScale
                        tonic={parseSharpsOrFlats(selectedKey)}
                        chordQ={selectedChordQ}
                        internalScaleName={internalScaleName}
                        clef={selectedClef}
                    />
                    {scaleLength6.includes(internalScaleName) ? (
                        <PitchNameDisplay6
                            tonic={parseSharpsOrFlats(selectedKey)}
                            internalScaleName={internalScaleName}
                            clef={selectedClef}
                        />
                    ) : scaleLength9.includes(internalScaleName) ? (
                        <PitchNameDisplay9
                            tonic={parseSharpsOrFlats(selectedKey)}
                            internalScaleName={internalScaleName}
                            clef={selectedClef}
                        />
                    ) : (
                        <PitchNameDisplay8
                            tonic={parseSharpsOrFlats(selectedKey)}
                            internalScaleName={internalScaleName}
                            clef={selectedClef}
                        />
                    )}

                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>
                        {parseSharpsOrFlats(selectedKey)}
                        {selectedChordQ} Chord Spelling
                    </Text>

                    <ChordSpelling
                        tonic={parseSharpsOrFlats(selectedKey)}
                        chordQ={selectedChordQ}
                        clef={selectedClef}
                    />
                    <PitchNameDisplay5
                        tonic={parseSharpsOrFlats(selectedKey)}
                        chordQ={selectedChordQ}
                        clef={selectedClef}
                    />
                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.horizontalContainer}>
                    <View
                        style={[
                            styles.verticalContainer,
                            styles.grandStaffContainer,
                        ]}
                    >
                        <Text style={styles.sectionHeader}>
                            5/9 Plane Voicing
                        </Text>
                        <GrandStaff
                            tonic={parseSharpsOrFlats(selectedKey)}
                            chordQ={selectedChordQ}
                            voicingType="59"
                        />
                        <ListenBtn title="listen" />
                    </View>
                    <View
                        style={[
                            styles.verticalContainer,
                            styles.grandStaffContainer,
                        ]}
                    >
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
    grandStaffContainer: {
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
