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

// Returns a nested array containting pitch/range and relevant pitch alteration.
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

// Return a nested array, containting pitch/range and relevant pitch alteration, where pitches have been lowered by one octave.
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

// Returns a nested array containting pitch/range and relevant pitch alteration.
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

// Return a nested array, containting pitch/range and relevant pitch alteration, where pitches have been lowered by one octave.
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

// returns a nested array containing pitch/range and relevant pitch alterations for '5/9 Plane' voicings.
export const get59Voicing = (key, chordQuality) => {
    // destructured chordQualities object
    const { chord } = getChordQualitySpecs(chordQuality);
    const baseScale = getBaseScale(key);
    const voicingRange1 = ['b', 'c', 'd'];
    // mappings used to place each chord tone in the proper index in 'outChord'. This allows Vexflow to render accidentals on the appropriate chord tone
    const voicingRange1PositionMap = {
        0: 0,
        1: 1,
        2: 4,
        3: 2,
        4: 3,
    };
    const voicingRange2PositionMap = {
        0: 0,
        1: 2,
        2: 3,
        3: 1,
        4: 4,
    };

    let isInVoiceRange1 = false;
    let outChord = new Array(chord.length);

    // iterate throught each chord tone and make necessary range/accidental adjustments
    for (let i = 0; i < chord.length; i++) {
        let currentPitchData = baseScale[chord[i][0]];
        let currentPitchName = currentPitchData[0][0];
        let currentPitchAccidental = currentPitchData[1];
        let newPitchData;

        // set chord root to appropriate range
        if (i === 0) {
            if (
                voicingRange1.includes(currentPitchName) ||
                (currentPitchName === 'e' && currentPitchAccidental === -1)
            ) {
                // determine the proper voicing range
                isInVoiceRange1 = true;
            }
            newPitchData = alterPitchOctave(currentPitchData[0], -2);

            // set 3rd scale degree to appropriate ranges
        } else if (i === 1) {
            newPitchData = alterPitchOctave(currentPitchData[0], -1);

            // set 5th scale degree to appropriate ranges
        } else if (i === 2) {
            if (!isInVoiceRange1) {
                newPitchData = alterPitchOctave(currentPitchData[0], -1);
            } else {
                newPitchData = currentPitchData[0];
            }

            // set 7th scale degree to appropriate ranges
        } else if (i === 3) {
            if (isInVoiceRange1) {
                newPitchData = alterPitchOctave(currentPitchData[0], -1);
            } else {
                newPitchData = alterPitchOctave(currentPitchData[0], -2);
            }
            // set 9th scale degree to appropriate ranges
        } else if (i === 4) {
            newPitchData = alterPitchOctave(currentPitchData[0], -1);
        }

        // set chord tone's accidental to that of the inputted chord quality
        let currentAlteration = chord[i][1];
        let newAlteration = currentPitchAccidental + currentAlteration;

        // insert chord tone to its proper array position, depending on the voicing range.
        if (isInVoiceRange1) {
            outChord[voicingRange1PositionMap[i]] = [
                newPitchData,
                newAlteration,
            ];
        } else {
            outChord[voicingRange2PositionMap[i]] = [
                newPitchData,
                newAlteration,
            ];
        }
    }

    return outChord;
};

// returns a nested array containing pitch/range and relevant pitch alterations for 'Rootless CED' voicings.
export const getCEDVoicing = (key, chordQuality) => {
    // destructured chordQualities object
    const { chord } = getChordQualitySpecs(chordQuality);
    const baseScale = getBaseScale(key);
    // mappings used to place each chord tone in the proper index in 'outChord'. This allows Vexflow to render accidentals on the appropriate chord tone
    const voicingPositionMap = {
        0: 4,
        1: 0,
        2: 3,
        3: 1,
        4: 2,
    };
    let isAnAKey = key === 'Ab' || key === 'A' || key === 'A#' ? true : false;
    let outChord = new Array(chord.length);

    // iterate throught each chord tone and make necessary range/accidental adjustments
    for (let i = 0; i < chord.length; i++) {
        let currentPitchData = baseScale[chord[i][0]];
        let currentPitchName = currentPitchData[0][0];
        let currentPitchAccidental = currentPitchData[1];
        let newPitchData;

        // set chord root to appropriate range
        if (i === 0) {
            // alter roots for all keys except for those beginning with 'A'
            if (!isAnAKey) {
                newPitchData = alterPitchOctave(currentPitchData[0], 1);
            } else {
                newPitchData = currentPitchData[0];
            }
            // set 3rd scale degree to appropriate ranges
        } else if (i === 1) {
            if (!isAnAKey) {
                newPitchData = alterPitchOctave(currentPitchData[0], -1);
            } else {
                newPitchData = alterPitchOctave(currentPitchData[0], -2);
            }
            // set 5th scale degree to appropriate ranges
        } else if (i === 2) {
            if (!isAnAKey) {
                newPitchData = currentPitchData[0];
            } else {
                newPitchData = alterPitchOctave(currentPitchData[0], -1);
            }

            // set 6/7th scale degree to appropriate ranges
        } else if (i === 3) {
            if (!isAnAKey) {
                newPitchData = alterPitchOctave(currentPitchData[0], -1);
            } else {
                newPitchData = alterPitchOctave(currentPitchData[0], -2);
            }

            // set 9th scale degree to appropriate ranges
        } else if (i === 4) {
            if (!isAnAKey) {
                newPitchData = alterPitchOctave(currentPitchData[0], -1);
            } else {
                newPitchData = alterPitchOctave(currentPitchData[0], -2);
            }
        }
        // set chord tone's accidental to that of the inputted chord quality
        let currentAlteration = chord[i][1];
        let newAlteration = currentPitchAccidental + currentAlteration;

        outChord[voicingPositionMap[i]] = [newPitchData, newAlteration];
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

/*  
The below functions are only to be used by this module (pitchHandlers.js) 
*/

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

const alterPitchOctave = (pitchData, numOctavesToDisplace) => {
    let splitPitchData = pitchData.split('/');
    let newRange = (
        parseInt(splitPitchData[1]) + numOctavesToDisplace
    ).toString();
    let newPitch = splitPitchData[0] + '/' + newRange;
    return newPitch;
};
