import { majorScales, chordQualities, scaleTypes } from './pitchData';

// return the approproate Vexflow accidental character corresponding to the inputted integer
export const getVexAccidentalType = accidental => {
    if (accidental === 2) {
        return '##';
    }
    if (accidental === 1) {
        return '#';
    }
    if (accidental === 0) {
        return 'n';
    }
    if (accidental === -1) {
        return 'b';
    }
    if (accidental === -2) {
        return 'bb';
    }
};

// Returns a nested list containting pitch/range and relevant pitch alteration.
// (Ex: [['c/4', 0], ['d/4', -1]]
export const getScaleTreble = (key, scaleType) => {
    // destructured scaleType object
    const { scale } = getScaleSpecs(scaleType);
    const baseScale = getBaseScale(key);
    const outScale = [];

    for (let i = 0; i < scale.length; i++) {
        let currentPitch = baseScale[scale[i][0]][0];
        let baseAlteration = baseScale[scale[i][0]][1];
        let currentAlteration = scale[i][1];
        let newAlteration = baseAlteration + currentAlteration;
        outScale.push([currentPitch, newAlteration]);
    }

    return outScale;
};

// Return a nested list, containting pitch/range and relevant pitch alteration, where pitches have been lowered by one octave.
// (Ex: [['c/4', 0], ['d/4', -1]]
export const getScaleBass = (key, scaleType) => {
    // destructured scaleType object
    const { scale } = getScaleSpecs(scaleType);
    const baseScale = getBaseScale(key);
    const outScale = [];
    const twoOctaveDropKeys = [
        'Eb',
        'E',
        'F',
        'F#',
        'Gb',
        'G',
        'G#',
        'Ab',
        'A',
        'A#',
    ];

    // drop base scale by one octave
    let baseScaleBass = dropScaleOctave(baseScale);

    // drop base scale once more if necessary (present in 'twoOctaveDropKeys')
    if (twoOctaveDropKeys.includes(key)) {
        baseScaleBass = dropScaleOctave(baseScaleBass);
    }

    for (let i = 0; i < scale.length; i++) {
        let currentPitch = baseScaleBass[scale[i][0]][0];
        let baseAlteration = baseScaleBass[scale[i][0]][1];
        let currentAlteration = scale[i][1];
        let newAlteration = baseAlteration + currentAlteration;
        outScale.push([currentPitch, newAlteration]);
    }

    return outScale;
};

// Returns a nested list containting pitch/range and relevant pitch alteration.
// (Ex: [['c/4', 0], ['d/4', -1]]
export const getChordTreble = (key, chordQuality) => {
    // destructured scaleType object
    const { chord } = getChordQualitySpecs(chordQuality);
    const baseScale = getBaseScale(key);
    const outChord = [];

    for (let i = 0; i < chord.length; i++) {
        let currentPitch = baseScale[chord[i][0]][0];
        let baseAlteration = baseScale[chord[i][0]][1];
        let currentAlteration = chord[i][1];
        let newAlteration = baseAlteration + currentAlteration;
        outChord.push([currentPitch, newAlteration]);
    }

    return outChord;
};

// Return a nested list, containting pitch/range and relevant pitch alteration, where pitches have been lowered by one octave.
// (Ex: [['c/4', 0], ['d/4', -1]]
export const getChordBass = (key, chordQuality) => {
    // destructured scaleType object
    const { chord } = getChordQualitySpecs(chordQuality);
    const baseScale = getBaseScale(key);
    const outChord = [];
    const twoOctaveDropKeys = [
        'Eb',
        'E',
        'F',
        'F#',
        'Gb',
        'G',
        'G#',
        'Ab',
        'A',
        'A#',
    ];

    let baseScaleBass = dropScaleOctave(baseScale);

    if (twoOctaveDropKeys.includes(key)) {
        baseScaleBass = dropScaleOctave(baseScaleBass);
    }

    for (let i = 0; i < chord.length; i++) {
        let currentPitch = baseScaleBass[chord[i][0]][0];
        let baseAlteration = baseScaleBass[chord[i][0]][1];
        let currentAlteration = chord[i][1];
        let newAlteration = baseAlteration + currentAlteration;
        outChord.push([currentPitch, newAlteration]);
    }

    return outChord;
};

// Returns the first (most commonly played) chord scale title in program readable form
export const getFirstInternalScaleName = chordQuality => {
    const { chordScaleName } = getChordQualitySpecs(chordQuality);
    return chordScaleName[0]['programUse'];
};

// returns an array of all viable scale names (both for user display and internal program use)
export const getChordScaleOptions = chordQuality => {
    const { chordScaleName } = getChordQualitySpecs(chordQuality);
    return chordScaleName;
};

// returns all chordQualities data (Object)
export const getAllChordScaleData = () => {
    return chordQualities;
};

/*  The below functions are only to be used by this module (pitchHandlers.js) */

// returns the raw major scale data for which all other scales and chords are derived (Nested Array)
const getBaseScale = key => {
    return majorScales[key]['pitches'];
};

// returns the specified chord quality attributes (Object)
const getChordQualitySpecs = chordQuality => {
    return chordQualities[chordQuality];
};

// returns scale/mode alterations (Nested Array)
const getScaleSpecs = scaleType => {
    return scaleTypes[scaleType];
};

// Lowers the inputted scale data by one octave.
const dropScaleOctave = baseScale => {
    const bassPitches = [];

    for (let i = 0; i < baseScale.length; i++) {
        let currentPitch = baseScale[i][0];
        let curPitchSplit = currentPitch.split('/');
        let newRange = (parseInt(curPitchSplit[1]) - 1).toString();
        let newBassPitch = curPitchSplit[0] + '/' + newRange;
        bassPitches.push([newBassPitch, baseScale[i][1]]);
    }

    return bassPitches;
};
