/*
Accidentals are as follows:
    -2 == 'bb' (double flat),
    -1 == 'b' (flat),
    0 == (natural),
    1 == '#' (sharp)
    2 == 'x' (double sharp),
    */

// Scales all have 15 notes (2 octaves)
export const majorScales = {
    C: {
        pitches: [
            ['c/4', 0],
            ['d/4', 0],
            ['e/4', 0],
            ['f/4', 0],
            ['g/4', 0],
            ['a/4', 0],
            ['b/4', 0],
            ['c/5', 0],
            ['d/5', 0],
            ['e/5', 0],
            ['f/5', 0],
            ['g/5', 0],
            ['a/5', 0],
            ['b/5', 0],
            ['c/6', 0],
        ],
    },
    'C#': {
        pitches: [
            ['c/4', 1],
            ['d/4', 1],
            ['e/4', 1],
            ['f/4', 1],
            ['g/4', 1],
            ['a/4', 1],
            ['b/4', 1],
            ['c/5', 1],
            ['d/5', 1],
            ['e/5', 1],
            ['f/5', 1],
            ['g/5', 1],
            ['a/5', 1],
            ['b/5', 1],
            ['c/6', 1],
        ],
    },
    Db: {
        pitches: [
            ['d/4', -1],
            ['e/4', -1],
            ['f/4', 0],
            ['g/4', -1],
            ['a/4', -1],
            ['b/4', -1],
            ['c/5', 0],
            ['d/5', -1],
            ['e/5', -1],
            ['f/5', 0],
            ['g/5', -1],
            ['a/5', -1],
            ['b/5', -1],
            ['c/6', 0],
            ['d/6', -1],
        ],
    },
    D: {
        pitches: [
            ['d/4', 0],
            ['e/4', 0],
            ['f/4', 1],
            ['g/4', 0],
            ['a/4', 0],
            ['b/4', 0],
            ['c/5', 1],
            ['d/5', 0],
            ['e/5', 0],
            ['f/5', 1],
            ['g/5', 0],
            ['a/5', 0],
            ['b/5', 0],
            ['c/6', 1],
            ['d/4', 0],
        ],
    },
    'D#': {
        pitches: [
            ['d/4', 1],
            ['e/4', 1],
            ['f/4', 2],
            ['g/4', 1],
            ['a/4', 1],
            ['b/4', 1],
            ['c/5', 2],
            ['d/5', 1],
            ['e/5', 1],
            ['f/5', 2],
            ['g/5', 1],
            ['a/5', 1],
            ['b/5', 1],
            ['c/6', 2],
            ['d/4', 1],
        ],
    },
    Eb: {
        pitches: [
            ['e/4', -1],
            ['f/4', 0],
            ['g/4', 0],
            ['a/4', -1],
            ['b/4', -1],
            ['c/5', 0],
            ['d/5', 0],
            ['e/5', -1],
            ['f/5', 0],
            ['g/5', 0],
            ['a/5', -1],
            ['b/5', -1],
            ['c/6', 0],
            ['d/6', 0],
            ['e/6', -1],
        ],
    },
    E: {
        pitches: [
            ['e/4', 0],
            ['f/4', 1],
            ['g/4', 1],
            ['a/4', 0],
            ['b/4', 0],
            ['c/5', 1],
            ['d/5', 1],
            ['e/5', 0],
            ['f/5', 1],
            ['g/5', 1],
            ['a/5', 0],
            ['b/5', 0],
            ['c/6', 1],
            ['d/6', 1],
            ['e/6', 0],
        ],
    },
    F: {
        pitches: [
            ['f/4', 0],
            ['g/4', 0],
            ['a/4', 0],
            ['b/4', -1],
            ['c/5', 0],
            ['d/5', 0],
            ['e/5', 0],
            ['f/5', 0],
            ['g/5', 0],
            ['a/5', 0],
            ['b/5', -1],
            ['c/6', 0],
            ['d/6', 0],
            ['e/6', 0],
            ['f/6', 0],
        ],
    },
    'F#': {
        pitches: [
            ['f/4', 1],
            ['g/4', 1],
            ['a/4', 1],
            ['b/4', 0],
            ['c/5', 1],
            ['d/5', 1],
            ['e/5', 1],
            ['f/5', 1],
            ['g/5', 1],
            ['a/5', 1],
            ['b/5', 0],
            ['c/6', 1],
            ['d/6', 1],
            ['e/6', 1],
            ['f/6', 1],
        ],
    },
    Gb: {
        pitches: [
            ['g/4', -1],
            ['a/4', -1],
            ['b/4', -1],
            ['c/5', -1],
            ['d/5', -1],
            ['e/5', -1],
            ['f/5', 0],
            ['g/5', -1],
            ['a/5', -1],
            ['b/5', -1],
            ['c/6', -1],
            ['d/6', -1],
            ['e/6', -1],
            ['f/6', 0],
            ['g/6', -1],
        ],
    },
    G: {
        pitches: [
            ['g/4', 0],
            ['a/4', 0],
            ['b/4', 0],
            ['c/5', 0],
            ['d/5', 0],
            ['e/5', 0],
            ['f/5', 1],
            ['g/5', 0],
            ['a/5', 0],
            ['b/5', 0],
            ['c/6', 0],
            ['d/6', 0],
            ['e/6', 0],
            ['f/6', 1],
            ['g/6', 0],
        ],
    },
    'G#': {
        pitches: [
            ['g/4', 1],
            ['a/4', 1],
            ['b/4', 1],
            ['c/5', 1],
            ['d/5', 1],
            ['e/5', 1],
            ['f/5', 2],
            ['g/5', 1],
            ['a/3', 1],
            ['b/3', 1],
            ['c/4', 1],
            ['d/4', 1],
            ['e/4', 1],
            ['f/4', 2],
            ['g/4', 1],
        ],
    },
    Ab: {
        pitches: [
            ['a/3', -1],
            ['b/3', -1],
            ['c/4', 0],
            ['d/4', -1],
            ['e/4', -1],
            ['f/4', 0],
            ['g/4', 0],
            ['a/4', -1],
            ['b/4', -1],
            ['c/5', 0],
            ['d/5', -1],
            ['e/5', -1],
            ['f/5', 0],
            ['g/5', 0],
            ['a/5', -1],
        ],
    },
    A: {
        pitches: [
            ['a/4', 0],
            ['b/4', 0],
            ['c/5', 1],
            ['d/5', 0],
            ['e/5', 0],
            ['f/5', 1],
            ['g/5', 1],
            ['a/5', 0],
            ['b/5', 0],
            ['c/6', 1],
            ['d/6', 0],
            ['e/6', 0],
            ['f/6', 1],
            ['g/6', 1],
            ['a/6', 0],
        ],
    },
    'A#': {
        pitches: [
            ['a/3', 1],
            ['b/3', 1],
            ['c/4', 2],
            ['d/4', 1],
            ['e/4', 2],
            ['f/4', 2],
            ['g/4', 2],
            ['a/4', 1],
            ['b/4', 1],
            ['c/5', 2],
            ['d/5', 1],
            ['e/5', 2],
            ['f/5', 2],
            ['g/5', 2],
            ['a/5', 1],
        ],
    },
    Bb: {
        pitches: [
            ['b/4', -1],
            ['c/4', 0],
            ['d/4', 0],
            ['e/4', -1],
            ['f/4', 0],
            ['g/4', 0],
            ['a/4', 0],
            ['b/4', -1],
            ['c/5', 0],
            ['d/5', 0],
            ['e/5', -1],
            ['f/5', 0],
            ['g/5', 0],
            ['a/5', 0],
            ['b/5', -1],
        ],
    },
    B: {
        pitches: [
            ['b/3', 0],
            ['c/4', 1],
            ['d/4', 1],
            ['e/4', 0],
            ['f/4', 1],
            ['g/4', 1],
            ['a/4', 1],
            ['b/4', 0],
            ['c/5', 1],
            ['d/5', 1],
            ['e/5', 0],
            ['f/5', 1],
            ['g/5', 1],
            ['a/5', 1],
            ['b/5', 0],
        ],
    },
};

// returns scale/mode alterations
export function getScaleSpecs(scaleType) {
    // Scale arrays contain a nested list for each scale degree to include in the new scale from the base (major scale)
    // where each nested list has the specified scale degree at index 0 and the necessary alteration at index 1.
    const scaleTypes = {
        ionian: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, 0],
                [7, 0],
            ],
        },
        dorian: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, -1],
                [7, 0],
            ],
        },
        phrygian: {
            scale: [
                [0, 0],
                [1, -1],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, -1],
                [6, -1],
                [7, 0],
            ],
        },
        lydian: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 1],
                [4, 0],
                [5, 0],
                [6, 0],
                [7, 0],
            ],
        },
        mixolydian: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, -1],
                [7, 0],
            ],
        },
        aeolian: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, -1],
                [6, -1],
                [7, 0],
            ],
        },
        locrian: {
            scale: [
                [0, 0],
                [1, -1],
                [2, -1],
                [3, 0],
                [4, -1],
                [5, -1],
                [6, -1],
                [7, 0],
            ],
        },
        locrian2: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, -1],
                [5, -1],
                [6, -1],
                [7, 0],
            ],
        },
        major: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, 0],
                [7, 0],
            ],
        },
        melodicMinor: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, 0],
                [7, 0],
            ],
        },
        harmonicMinor: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, -1],
                [6, 0],
                [7, 0],
            ],
        },
        harmonicMajor: {
            scale: [
                [0, 0],
                [1, 0],
                [2],
                [3, 0],
                [4, 0],
                [5, -1],
                [6, 0],
                [7, 0],
            ],
        },
        naturalMinor: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, -1],
                [6, -1],
                [7, 0],
            ],
        },
        wholeTone: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 1],
                [4, 1],
                [6, -1],
                [7, 0],
            ],
        },
        majorPentatonic: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [4, 0],
                [5, 0],
                [7, 0],
            ],
        },
        minorPentatonic: {
            scale: [
                [0, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [6, -1],
                [7, 0],
            ],
        },

        traditionalBlues: {
            scale: [
                [0, 0],
                [2, -1],
                [3, 0],
                [3, 1],
                [4, 0],
                [6, -1],
                [7, 0],
            ],
        },

        majorBebop: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [4, 1],
                [5, 0],
                [6, 0],
                [7, 0],
            ],
        },

        dominantBebop: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, -1],
                [6, 0],
                [7, 0],
            ],
        },

        minorBebop: {
            scale: [
                [0, 0],
                [1, 0],
                [2, -1],
                [3, 0],
                [4, 0],
                [5, 0],
                [6, -1],
                [6, 0],
                [7, 0],
            ],
        },

        // NEED TO BE ABLE TO HANDLE SHARPS AND FLATS
        // wholeHalfDiminished: {
        //     pitchCount: 9,
        //     alterationTypes: -1,
        //     alterationPitches: [2, 6],
        // },

        // NEED TO BE ABLE TO HANDLE SHARPS AND FLATS
        // halfWholeDiminished: {
        //     pitchCount: 9,
        //     alterationTypes: -1,
        //     alterationPitches: [2, 6],
        // },

        // ASK POP HOW TO FRAME THIS... I.E. AS IF SCALE DEGREE 7 IS THE TONIC?
        // superLocrian: {
        //     pitchCount: 8,
        //     alterationTypes: -1,
        //     alterationPitches: [1, 2, 3, 4, 5, 6],
        // },
        // // ASK POP HOW TO FRAME THIS... I.E. AS IF SCALE DEGREE 7 IS THE TONIC?
        // superLocrian: {

        //     pitchCount: 8,
        //     alterationTypes: -1,
        //     alterationPitches: [1, 2, 3, 4, 5, 6],
        // },

        // ASK POP HOW TO FRAME THIS... I.E. AS IF SCALE DEGREE 7 IS THE TONIC?
        // mode2HarmonicMinor: {
        //     scale: [
        //         [1, 0],
        //         [2, -1],
        //         [3, 0],
        //         [4, 0],
        //         [5, -1],
        //         [6, 0],
        //         [7, 0],
        //         [8, 0],
        //     ],
        //     pitchCount: 8,
        //     alterationTypes: -1,
        //     alterationPitches: [1, 2, 3, 4, 5, 6],
        // },

        // ASK POP HOW TO FRAME THIS... I.E. AS IF SCALE DEGREE 7 IS THE TONIC?
        // mode5HarmonicMinor: {
        //     scale: [
        //         [4, 0],
        //         [5, -1],
        //         [6, 0],
        //         [7, 0],
        //         [8, 0],
        //         [9, -1],
        //         [10, 0],
        //         [11, 0],
        //     ],
        //     pitchCount: 8,
        //     alterationTypes: -1,
        //     alterationPitches: [1, 2, 3, 4, 5, 6],
        // },

        lydianDominant: {
            scale: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 1],
                [4, 0],
                [5, 0],
                [6, -1],
                [7, 0],
            ],
        },
    };
    // console.log(scaleTypes[scaleType]);
    return scaleTypes[scaleType];
}

// return chord quality alterations
export function getChordQualitySpecs(chordQuality) {
    const chordQualities = {
        '6/9': {
            chord: [
                [0, 0],
                [2, 0],
                [4, 0],
                [5, 0],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Major/Ionian',
                programUse: 'major',
            },
        },
        maj7: {
            chord: [
                [0, 0],
                [2, 0],
                [4, 0],
                [6, 0],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Major/Ionian',
                programUse: 'major',
            },
        },
        'min6/9': {
            chord: [
                [0, 0],
                [2, -1],
                [4, 0],
                [5, 0],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Melodic Minor',
                programUse: 'melodicMinor',
            },
        },
        'min(maj7)': {
            chord: [
                [0, 0],
                [2, -1],
                [4, 0],
                [6, 0],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Melodic Minor',
                programUse: 'melodicMinor',
            },
        },
        min7: {
            chord: [
                [0, 0],
                [2, -1],
                [4, 0],
                [6, -1],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Dorian',
                programUse: 'dorian',
            },
        },
        7: {
            chord: [
                [0, 0],
                [2, 0],
                [4, 0],
                [6, -1],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Mixolydian',
                programUse: 'mixolydian',
            },
        },
        // dim7: {
        //     chord: [
        //         [0, 0],
        //         [2, -1],
        //         [3, 1],
        //         [5, 0],
        //     ],

        // },
        'min7(b5)': {
            chord: [
                [0, 0],
                [2, -1],
                [4, -1],
                [6, -1],
                [8, -1],
            ],
            chordScaleName: {
                userDisplay: 'Locrian',
                programUse: 'locrian',
            },
        },
        'min9(b5)': {
            chord: [
                [0, 0],
                [2, -1],
                [4, -1],
                [6, -1],
                [8, 0],
            ],
            chordScaleName: {
                userDisplay: 'Locrian 2',
                programUse: 'locrian2',
            },
        },
    };
    return chordQualities[chordQuality];
}

// export function getChordScales(chordQuality) {
//     const chordQualities = {
//         '6/9': {
//             labels: {
//                 userDisplay: ['Major/Ionian'],
//                 programUse: ['major'],
//             },
//         },
//         maj7: {
//             labels: {
//                 userDisplay: ['Major/Ionian'],
//                 programUse: ['major'],
//             },
//         },
//         'min6/9': {
//             labels: {
//                 userDisplay: ['Melodic Minor'],
//                 programUse: ['melodicMinor'],
//             },
//         },
//         'min(maj7)': {
//             labels: {
//                 userDisplay: ['Melodic Minor'],
//                 programUse: ['melodicMinor'],
//             },
//         },
//         min7: {
//             labels: {
//                 userDisplay: ['Dorian'],
//                 programUse: ['dorian'],
//             },
//         },
//         7: {
//             labels: {
//                 userDisplay: ['Mixolydian'],
//                 programUse: ['mixolydian'],
//             },
//         },
//         'min7(b5)': {
//             labels: {
//                 userDisplay: ['Locrian'],
//                 programUse: ['locrian'],
//             },
//         },
//         'min9(b5)': {
//             labels: {
//                 userDisplay: ['Locrian 2'],
//                 programUse: ['locrian2'],
//             },
//         },
//         // dim7: {
//         //     labels: {
//         //         userDisplay: ['Mixolydian'],
//         //         programUse: ['mixolydian'],
//         //     },
//         // },
//     };
//     return chordQuality[chordQualities];
// }
