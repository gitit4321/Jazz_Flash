import React from 'react';
import { View } from 'react-native';
import { useScore } from 'react-native-vexflow';
import Vex from 'vexflow';

const Staff = props => {
    const type = props.type;
    // console.log(type);
    const tonic = props.tonic;
    // console.log(tonic);

    const [context, stave] = useScore({
        contextSize: { x: 260, y: 110 }, // this determine the canvas size
        staveOffset: { x: 5, y: 5 }, // this determine the starting point of the staff relative to top-right corner of canvas
        staveWidth: 250, // ofc, stave width
        clef: 'treble', // clef
        timeSig: '4/4', // time signiture
    });

    // picked from Vexflow tutorial: https://github.com/0xfe/vexflow/wiki/The-VexFlow-Tutorial
    const VF = Vex.Flow;

    // console.log(VF.durationToTicks);
    // console.log(VF.clefProperties.values);
    var notes = [
        new VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'w' }),
        new VF.StaveNote({
            clef: 'treble',
            keys: ['e/4'],
            duration: 'w',
        }).addAccidental(0, new VF.Accidental('b')),
        new VF.StaveNote({ clef: 'treble', keys: ['g/4'], duration: 'w' }),
        new VF.StaveNote({
            clef: 'treble',
            keys: ['b/4'],
            duration: 'w',
        }).addAccidental(0, new VF.Accidental('b')),
        new VF.StaveNote({ clef: 'treble', keys: ['d/5'], duration: 'w' }),
    ];

    // Create a voice in 4/4 and add the notes from above
    var voice = new VF.Voice({ num_beats: 20, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 200 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 200);
    voice.draw(context, stave);

    return <View>{context.render()}</View>;
};

export default Staff;
