import React from 'react';
import { View } from 'react-native';
import { useScore } from 'react-native-vexflow';
import Vex from 'vexflow';
import { pitchData } from './pitch_data/pitchData';

const ChordSpelling = props => {
    let { tonic, chordQ, clef } = props;
    clef = clef.toLowerCase();
    const noteData = pitchData[tonic][chordQ]['spellingData'][clef];
    let accidentalType = pitchData[tonic]['accidentalType'];

    const [context, stave] = useScore({
        contextSize: { x: 260, y: 100 }, // this determine the canvas size
        staveOffset: { x: 5, y: -10 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 250, // ofc, stave width
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
                // .addAnnotation(
                //     0,
                //     new VF.Annotation('C').setVerticalJustification()
                // )
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

    // Create a voice in 4/4 and add the notes from above
    let voice = new VF.Voice({ num_beats: 20, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 200 pixels.
    let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 230);
    voice.draw(context, stave);

    return <View>{context.render()}</View>;
};

export default ChordSpelling;
