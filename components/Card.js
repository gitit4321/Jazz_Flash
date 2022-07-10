import React, { useContext } from 'react';
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
import PitchNameDisplay7 from './PitchNameDisplay7';
import PitchNameDisplay8 from './PitchNameDisplay8';
import PitchNameDisplay9 from './PitchNameDisplay9';
import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';
import { parseSharpsOrFlats } from '../utils/parseSharpsOrFlats';

const Card = () => {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);

    const scaleLength6 = ['majorPentatonic', 'minorPentatonic'];
    const scaleLength7 = ['wholeTone'];
    const scaleLength9 = ['halfWholeDiminished', 'wholeHalfDiminished'];

    return (
        <View style={styles.primaryContainer}>
            <Text style={styles.chordSymbol}>
                {parseSharpsOrFlats(selectedPitchDataCtx.selectedKey)}
                {selectedPitchDataCtx.selectedChordQ}
            </Text>
            <PickerBar />
            <ScalePicker />
            <SharpFlatRadioBtns />
            <ScrollView>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>
                        {parseSharpsOrFlats(selectedPitchDataCtx.selectedKey)}{' '}
                        {selectedPitchDataCtx.displayScaleName} Scale
                    </Text>
                    <ChordScale />
                    {scaleLength6.includes(
                        selectedPitchDataCtx.internalScaleName
                    ) ? (
                        <PitchNameDisplay6 />
                    ) : scaleLength7.includes(
                          selectedPitchDataCtx.internalScaleName
                      ) ? (
                        <PitchNameDisplay7 />
                    ) : scaleLength9.includes(
                          selectedPitchDataCtx.internalScaleName
                      ) ? (
                        <PitchNameDisplay9 />
                    ) : (
                        <PitchNameDisplay8 />
                    )}

                    <ListenBtn title="listen" />
                    <View style={styles.lineBreak}></View>
                </View>
                <View style={styles.verticalContainer}>
                    <Text style={styles.sectionHeader}>
                        {parseSharpsOrFlats(selectedPitchDataCtx.selectedKey)}
                        {selectedPitchDataCtx.selectedChordQ} Chord Spelling
                    </Text>
                    <ChordSpelling />
                    <PitchNameDisplay5 />
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
                        <GrandStaff voicingType="59" />
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
                        <GrandStaff voicingType="CED" />
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
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
    },
    chordSymbol: {
        fontSize: 38,
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

export default Card;
