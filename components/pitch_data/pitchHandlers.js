import { majorScales, getScaleSpecs, getChordQualitySpecs } from './pitchData';

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
    const baseScaleBass = dropScaleOctave(baseScale);

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
    const baseScaleBass = dropScaleOctave(baseScale);

    for (let i = 0; i < chord.length; i++) {
        let currentPitch = baseScaleBass[chord[i][0]][0];
        let baseAlteration = baseScaleBass[chord[i][0]][1];
        let currentAlteration = chord[i][1];
        let newAlteration = baseAlteration + currentAlteration;
        outChord.push([currentPitch, newAlteration]);
    }

    return outChord;
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

// Lowers this inputted scale data by one octave.
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
