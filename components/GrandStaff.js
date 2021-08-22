import React from 'react';
import { View } from 'react-native';
import { useGrandStaff } from 'react-native-vexflow';
import Vex from 'vexflow';
import { pitchData } from './pitch_data/pitchData';

const GrandStaff = props => {
    let { tonic, chordQ, voicingType } = props;
    const fingeringType =
        voicingType === '59' ? 'planeVoicing59Data' : 'rootlessCEDVoicing';
    const noteData = pitchData[tonic][chordQ][fingeringType];
    let accidentalType = pitchData[tonic]['accidentalType'];

    const [context, stave] = useGrandStaff({
        contextSize: { x: 180, y: 170 }, // this determine the canvas size
        staveOffset: { x: 30, y: -10 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 120, // ofc, stave width
    });

    const VF = Vex.Flow;

    let keysTreble = [];
    let accidentalsTreble = [];
    let keysBass = [];
    let accidentalsBass = [];

    // Add pitches and accidentals to their respective arrays
    for (let i = 0; i < noteData.pitchCount; i++) {
        let clef;
        let range = noteData.pitches[i][0].split('/')[1];
        if (range >= 4) {
            clef = 'treble';
        } else {
            clef = 'bass';
        }

        if (clef == 'treble') {
            keysTreble.push(noteData.pitches[i][0]);
            accidentalsTreble.push(noteData.pitches[i][1]);
        } else {
            keysBass.push(noteData.pitches[i][0]);
            accidentalsBass.push(noteData.pitches[i][1]);
        }
    }

    // Instantiate notes
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

    // Add accidentals to notes
    if (accidentalsTreble.length > 0) {
        for (let i = 0; i < accidentalsTreble.length; i++) {
            if (accidentalsTreble[i] == 1) {
                notesTreble.addAccidental(i, new VF.Accidental(accidentalType));
            }
        }
    }

    if (accidentalsBass.length > 0) {
        for (let i = 0; i < accidentalsBass.length; i++) {
            if (accidentalsBass[i] == 1) {
                notesBass.addAccidental(i, new VF.Accidental(accidentalType));
            }
        }
    }

    let voice1 = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice1.addTickable(notesTreble).setStave(stave[0]);

    let voice2 = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice2.addTickable(notesBass).setStave(stave[1]);

    // Format and justify the notes to 200 pixels.
    let formatter = new VF.Formatter();

    var startX = Math.max(stave[0].getNoteStartX(), stave[1].getNoteStartX());

    stave[0].setNoteStartX(startX);
    stave[1].setNoteStartX(startX);

    formatter.joinVoices([voice1]);
    formatter.joinVoices([voice2]);

    formatter.format([voice1]);
    formatter.format([voice2]);

    voice1.draw(context, stave[0]);
    voice2.draw(context, stave[1]);

    return <View>{context.render()}</View>;
};

export default GrandStaff;
