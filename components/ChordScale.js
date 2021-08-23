import React from 'react';
import { View } from 'react-native';
import { useScore } from 'react-native-vexflow';
import Vex from 'vexflow';
import {
    getScaleTreble,
    getScaleBass,
    getVexAccidentalType,
} from './pitch_data/pitchHandlers';

const ChordScale = props => {
    let { tonic, selectedScaleType, clef } = props;
    clef = clef.toLowerCase();

    const noteData =
        clef === 'bass'
            ? getScaleBass(tonic, selectedScaleType)
            : getScaleTreble(tonic, selectedScaleType);

    const [context, stave] = useScore({
        contextSize: { x: 300, y: 100 }, // this determine the canvas size
        staveOffset: { x: 5, y: -10 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 294, // ofc, stave width
        clef: clef, // clef
    });

    const VF = Vex.Flow;
    let notes = [];
    let beatCount = 0;

    for (let i = 0; i < noteData.length; i++) {
        if (noteData[i][1] !== 0) {
            notes.push(
                new VF.StaveNote({
                    clef: clef,
                    keys: [noteData[i][0]],
                    duration: 'w',
                }).addAccidental(
                    0,
                    new VF.Accidental(getVexAccidentalType(noteData[i][1]))
                )
            );
        } else {
            notes.push(
                new VF.StaveNote({
                    clef: clef,
                    keys: [noteData[i][0]],
                    duration: 'w',
                })
            );
        }
        beatCount++;
    }

    // multiply beatcount by 4 to accomodate each note rendering as a whole note (4 beats)
    beatCount = beatCount * 4;

    let voice = new VF.Voice({ num_beats: beatCount, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 270 pixels.
    let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 270);
    voice.draw(context, stave);

    return <View>{context.render()}</View>;
};

export default ChordScale;
