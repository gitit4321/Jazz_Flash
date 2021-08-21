import React from 'react';
import { View } from 'react-native';
import { useScore } from 'react-native-vexflow';
import Vex from 'vexflow';
import { scaleData } from './chord_data/cmi7';

const ChordScale = props => {
    const type = props.type;
    const tonic = props.tonic;
    let clef = `${props.clef.toLowerCase()}`;

    const [context, stave] = useScore({
        contextSize: { x: 300, y: 110 }, // this determine the canvas size
        staveOffset: { x: 5, y: 5 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 294, // ofc, stave width
        clef: `${props.clef.toLowerCase()}`, // clef
    });

    const VF = Vex.Flow;
    let notes = [];
    let cd = scaleData[clef];

    for (let i = 0; i < cd.pitchCount; i++) {
        if (cd.pitches[i][1] == 1) {
            notes.push(
                new VF.StaveNote({
                    clef: clef,
                    keys: [cd.pitches[i][0]],
                    duration: 'w',
                }).addAccidental(0, new VF.Accidental('b'))
            );
        } else {
            notes.push(
                new VF.StaveNote({
                    clef: clef,
                    keys: [cd.pitches[i][0]],
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
