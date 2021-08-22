// export const spellingData = {
//     treble: {
//         pitchCount: 5,
//         pitches: [
//             ['c/4', 0],
//             ['e/4', 1],
//             ['g/4', 0],
//             ['b/4', 1],
//             ['d/5', 0],
//         ], // 0 == natural, 1 == accidental
//     },
//     bass: {
//         pitchCount: 5,
//         pitches: [
//             ['c/3', 0],
//             ['e/3', 1],
//             ['g/3', 0],
//             ['b/3', 1],
//             ['d/4', 0],
//         ], // 0 == natural, 1 == accidental
//     },
// };

// export const scaleData = {
//     treble: {
//         pitchCount: 8,
//         pitches: [
//             ['c/4', 0],
//             ['d/4', 0],
//             ['e/4', 1],
//             ['f/4', 0],
//             ['g/4', 0],
//             ['a/4', 0],
//             ['b/4', 1],
//             ['c/5', 0],
//         ], // 0 == natural, 1 == accidental
//     },
//     bass: {
//         pitchCount: 8,
//         pitches: [
//             ['c/3', 0],
//             ['d/3', 0],
//             ['e/3', 1],
//             ['f/3', 0],
//             ['g/3', 0],
//             ['a/3', 0],
//             ['b/3', 1],
//             ['c/4', 0],
//         ], // 0 == natural, 1 == accidental
//     },
// };

// export const planeVoicing59Data = {
//     pitchCount: 5,
//     pitches: [
//         ['c/2', 0],
//         ['e/3', 1],
//         ['b/3', 1],
//         ['d/4', 0],
//         ['g/4', 0],
//     ], // 0 == natural, 1 == accidental
// };

// export const rootlessCEDVoicing = {
//     pitchCount: 5,
//     pitches: [
//         ['e/3', 1],
//         ['b/3', 1],
//         ['d/4', 0],
//         ['g/4', 0],
//         ['c/5', 0],
//     ], // 0 == natural, 1 == accidental
// };

export const pitchData = {
    C: {
        accidentalType: 'b',
        maj7: {
            spellingData: {
                treble: {
                    pitchCount: 5,
                    pitches: [
                        ['c/4', 0],
                        ['e/4', 0],
                        ['g/4', 0],
                        ['b/4', 0],
                        ['d/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 5,
                    pitches: [
                        ['c/3', 0],
                        ['e/3', 0],
                        ['g/3', 0],
                        ['b/3', 0],
                        ['d/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            scaleData: {
                treble: {
                    pitchCount: 8,
                    pitches: [
                        ['c/4', 0],
                        ['d/4', 0],
                        ['e/4', 0],
                        ['f/4', 0],
                        ['g/4', 0],
                        ['a/4', 0],
                        ['b/4', 0],
                        ['c/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 8,
                    pitches: [
                        ['c/3', 0],
                        ['d/3', 0],
                        ['e/3', 0],
                        ['f/3', 0],
                        ['g/3', 0],
                        ['a/3', 0],
                        ['b/3', 0],
                        ['c/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            planeVoicing59Data: {
                pitchCount: 5,
                pitches: [
                    ['c/2', 0],
                    ['e/3', 0],
                    ['b/3', 0],
                    ['d/4', 0],
                    ['g/4', 0],
                ], // 0 == natural, 1 == accidental
            },
            rootlessCEDVoicing: {
                pitchCount: 5,
                pitches: [
                    ['e/3', 0],
                    ['b/3', 0],
                    ['d/4', 0],
                    ['g/4', 0],
                    ['c/5', 0],
                ], // 0 == natural, 1 == accidental
            },
        },
        min7: {
            spellingData: {
                treble: {
                    pitchCount: 5,
                    pitches: [
                        ['c/4', 0],
                        ['e/4', 1],
                        ['g/4', 0],
                        ['b/4', 1],
                        ['d/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 5,
                    pitches: [
                        ['c/3', 0],
                        ['e/3', 1],
                        ['g/3', 0],
                        ['b/3', 1],
                        ['d/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            scaleData: {
                treble: {
                    pitchCount: 8,
                    pitches: [
                        ['c/4', 0],
                        ['d/4', 0],
                        ['e/4', 1],
                        ['f/4', 0],
                        ['g/4', 0],
                        ['a/4', 0],
                        ['b/4', 1],
                        ['c/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 8,
                    pitches: [
                        ['c/3', 0],
                        ['d/3', 0],
                        ['e/3', 1],
                        ['f/3', 0],
                        ['g/3', 0],
                        ['a/3', 0],
                        ['b/3', 1],
                        ['c/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            planeVoicing59Data: {
                pitchCount: 5,
                pitches: [
                    ['c/2', 0],
                    ['e/3', 1],
                    ['b/3', 1],
                    ['d/4', 0],
                    ['g/4', 0],
                ], // 0 == natural, 1 == accidental
            },
            rootlessCEDVoicing: {
                pitchCount: 5,
                pitches: [
                    ['e/3', 1],
                    ['b/3', 1],
                    ['d/4', 0],
                    ['g/4', 0],
                    ['c/5', 0],
                ], // 0 == natural, 1 == accidental
            },
        },
    },
    D: {
        accidentalType: '#',
        maj7: {
            spellingData: {
                treble: {
                    pitchCount: 5,
                    pitches: [
                        ['d/4', 0],
                        ['f/4', 1],
                        ['a/4', 0],
                        ['c/5', 1],
                        ['e/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 5,
                    pitches: [
                        ['d/3', 0],
                        ['f/3', 1],
                        ['a/3', 0],
                        ['c/4', 1],
                        ['e/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            scaleData: {
                treble: {
                    pitchCount: 8,
                    pitches: [
                        ['d/4', 0],
                        ['e/4', 0],
                        ['f/4', 1],
                        ['g/4', 0],
                        ['a/4', 0],
                        ['b/4', 0],
                        ['c/5', 1],
                        ['d/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 8,
                    pitches: [
                        ['d/3', 0],
                        ['e/3', 0],
                        ['f/3', 1],
                        ['g/3', 0],
                        ['a/3', 0],
                        ['b/3', 0],
                        ['c/3', 1],
                        ['d/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            planeVoicing59Data: {
                pitchCount: 5,
                pitches: [
                    ['d/2', 0],
                    ['f/3', 1],
                    ['c/3', 1],
                    ['e/4', 0],
                    ['a/4', 0],
                ], // 0 == natural, 1 == accidental
            },
            rootlessCEDVoicing: {
                pitchCount: 5,
                pitches: [
                    ['f/3', 1],
                    ['c/3', 1],
                    ['e/4', 0],
                    ['a/4', 0],
                    ['d/5', 0],
                ], // 0 == natural, 1 == accidental
            },
        },
        min7: {
            spellingData: {
                treble: {
                    pitchCount: 5,
                    pitches: [
                        ['d/4', 0],
                        ['f/4', 0],
                        ['a/4', 0],
                        ['c/5', 0],
                        ['e/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 5,
                    pitches: [
                        ['d/3', 0],
                        ['f/3', 0],
                        ['a/3', 0],
                        ['c/4', 0],
                        ['e/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            scaleData: {
                treble: {
                    pitchCount: 8,
                    pitches: [
                        ['d/4', 0],
                        ['e/4', 0],
                        ['f/4', 0],
                        ['g/4', 0],
                        ['a/4', 0],
                        ['b/4', 0],
                        ['c/4', 0],
                        ['d/5', 0],
                    ], // 0 == natural, 1 == accidental
                },
                bass: {
                    pitchCount: 8,
                    pitches: [
                        ['d/3', 0],
                        ['e/3', 0],
                        ['f/3', 0],
                        ['g/3', 0],
                        ['a/3', 0],
                        ['b/3', 0],
                        ['c/4', 0],
                        ['d/4', 0],
                    ], // 0 == natural, 1 == accidental
                },
            },
            planeVoicing59Data: {
                pitchCount: 5,
                pitches: [
                    ['d/2', 0],
                    ['f/3', 0],
                    ['c/3', 0],
                    ['e/4', 0],
                    ['a/4', 0],
                ], // 0 == natural, 1 == accidental
            },
            rootlessCEDVoicing: {
                pitchCount: 5,
                pitches: [
                    ['f/3', 0],
                    ['c/3', 0],
                    ['e/4', 0],
                    ['a/4', 0],
                    ['d/5', 0],
                ], // 0 == natural, 1 == accidental
            },
        },
    },
};
