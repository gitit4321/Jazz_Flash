import React from 'react';
import { View } from 'react-native';
import { useGrandStaff } from 'react-native-vexflow';
import Vex from 'vexflow';
import { planeVoicing59Data } from './chord_data/cmi7';

const PlaneVoicing59 = props => {
    // const type = props.type;
    const tonic = props.tonic;

    const [context, stave] = useGrandStaff({
        contextSize: { x: 180, y: 200 }, // this determine the canvas size
        staveOffset: { x: 30, y: 0 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 150, // ofc, stave width
    });

    const VF = Vex.Flow;
    let cd = planeVoicing59Data;

    let keysTreble = [];
    let accidentalsTreble = [];
    let keysBass = [];
    let accidentalsBass = [];

    for (let i = 0; i < cd.pitchCount; i++) {
        let clef;
        let range = cd.pitches[i][0].split('/')[1];
        if (range >= 4) {
            clef = 'treble';
        } else {
            clef = 'bass';
        }

        if (clef == 'treble') {
            keysTreble.push(cd.pitches[i][0]);
            accidentalsTreble.push(cd.pitches[i][1]);
        } else {
            keysBass.push(cd.pitches[i][0]);
            accidentalsBass.push(cd.pitches[i][1]);
        }
    }

    let notesTreble = new VF.StaveNote({
        clef: 'treble',
        keys: keysTreble,
        duration: 'w',
    });

    let notesBass = new VF.StaveNote({
        clef: 'bass',
        keys: keysBass,
        duration: 'w',
    });

    let voice1 = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice1.addTickable(notesTreble);

    let voice2 = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice2.addTickable(notesBass);

    // // Format and justify the notes to 200 pixels.
    let formatter = new VF.Formatter();

    formatter.joinVoices([voice1]);
    formatter.joinVoices([voice2]);
    formatter.format([voice1], 50);
    formatter.format([voice2], 90);

    voice1.draw(context, stave[0]);
    voice2.draw(context, stave[1]);

    return <View>{context.render()}</View>;
};

export default PlaneVoicing59;
