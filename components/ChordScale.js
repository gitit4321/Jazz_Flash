import React from 'react';
import { View } from 'react-native';
import { useScore } from 'react-native-vexflow';
import Vex from 'vexflow';
import { pitchData } from './pitch_data/pitchData';

const ChordScale = props => {
    let { tonic, chordQ, clef } = props;
    clef = clef.toLowerCase();
    const noteData = pitchData[tonic][chordQ]['scaleData'][clef];
    let accidentalType = pitchData[tonic]['accidentalType'];

    const [context, stave] = useScore({
        contextSize: { x: 300, y: 100 }, // this determine the canvas size
        staveOffset: { x: 5, y: -10 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 294, // ofc, stave width
        clef: clef, // clef
    });

    const VF = Vex.Flow;
    let notes = [];

    for (let i = 0; i < noteData.pitchCount; i++) {
        if (noteData.pitches[i][1] == 1) {
            notes.push(
                new VF.StaveNote({
                    clef: clef,
                    keys: [noteData.pitches[i][0]],
                    duration: 'w',
                }).addAccidental(0, new VF.Accidental(accidentalType))
            );
        } else {
            notes.push(
                new VF.StaveNote({
                    clef: clef,
                    keys: [noteData.pitches[i][0]],
                    duration: 'w',
                })
            );
        }
    }

    let voice = new VF.Voice({ num_beats: 32, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 200 pixels.
    let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 270);
    voice.draw(context, stave);

    return <View>{context.render()}</View>;
};

export default ChordScale;
