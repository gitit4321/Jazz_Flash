import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';
import { parseSharpsOrFlats } from '../utils/parseSharpsOrFlats';
import { useScore } from 'react-native-vexflow';
import React, { useContext } from 'react';
import Vex from 'vexflow';
import {
    getChordTreble,
    getChordBass,
    getVexAccidentalType,
} from '../pitch_data/pitchHandlers';
import { View } from 'react-native';

const ChordSpelling = () => {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);

    let clef = selectedPitchDataCtx.selectedClef.toLowerCase();

    const noteData =
        clef === 'bass'
            ? getChordBass(
                  parseSharpsOrFlats(selectedPitchDataCtx.selectedKey),
                  selectedPitchDataCtx.selectedChordQ
              )
            : getChordTreble(
                  parseSharpsOrFlats(selectedPitchDataCtx.selectedKey),
                  selectedPitchDataCtx.selectedChordQ
              );

    const [context, stave] = useScore({
        contextSize: { x: 260, y: 110 }, // this determine the canvas size
        staveOffset: { x: 5, y: 0 }, // this determine the starting point of the staff relative to top-left corner of canvas
        staveWidth: 250, // ofc, stave width
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

    // Format and justify the notes to 230 pixels.
    let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 230);
    voice.draw(context, stave);

    return <View>{context.render()}</View>;
};

export default ChordSpelling;
