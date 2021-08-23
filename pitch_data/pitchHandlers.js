import { majorScales, chordQualities, scaleTypes } from './pitchData';
// getChordQualitySpecs, getScaleSpecs,

// Returns a nested list containting pitch/range and relevant pitch alteration.
// (Ex: [['c/4', 0], ['d/4', -1]]
export const getScaleTreble = (key, scaleType) => {
    // destructured scaleType object
    const { scale } = getScaleSpecs(scaleType);
    const baseScale = majorScales[key]['pitches'];
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
    const baseScale = majorScales[key]['pitches'];
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
    const baseScale = majorScales[key]['pitches'];
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
    const baseScale = majorScales[key]['pitches'];
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

// returns an array of all viable scale names (both for user display and internal program use)
export const getChordScaleOptions = chordQuality => {
    const { chordScaleName } = getChordQualitySpecs(chordQuality);
    return chordScaleName;
};

export const getAllChordScaleData = () => {
    return chordQualities;
};

// returns the specified chord quality attributes
const getChordQualitySpecs = chordQuality => {
    return chordQualities[chordQuality];
};

// returns scale/mode alterations
const getScaleSpecs = scaleType => {
    return scaleTypes[scaleType];
};
// Lowers this inputted scale data by one octave
// Only for use in this module
const dropScaleOctave = baseScale => {
    bassPitches = [];

    for (let i = 0; i < baseScale.length; i++) {
        let currentPitch = baseScale[i][0];
        let curPitchSplit = currentPitch.split('/');
        let newRange = (parseInt(curPitchSplit[1]) - 1).toString();
        let newBassPitch = curPitchSplit[0] + '/' + newRange;
        bassPitches.push([newBassPitch, baseScale[i][1]]);
    }

    return bassPitches;
};
