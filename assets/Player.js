import { Audio } from 'expo-av';

const sharpToFlatMap = {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
    'A#': 'Bb',
};
const soundObjects = {};

function convertSharpToFlat(pitch) {
    if (pitch.length > 2) {
        const flatName = sharpToFlatMap[pitch.slice(0, 2)];
        return flatName + pitch[2];
    }
    return pitch;
}

class Player {
    static async load(library) {
        const promisedSoundObjects = [];
        for (const name in library) {
            const sound = library[name];
            soundObjects[name] = new Audio.Sound();
            const loadedSound = await soundObjects[name].loadAsync(sound);
            promisedSoundObjects.push(loadedSound);
        }
        return promisedSoundObjects;
    }

    static async playSound(pitch) {
        pitch = convertSharpToFlat(pitch);
        try {
            if (soundObjects[pitch]) {
                await soundObjects[pitch].replayAsync();
            }
        } catch (error) {
            console.warn(error);
        }
    }

    static async stopSound(pitch) {
        pitch = convertSharpToFlat(pitch);
        try {
            if (soundObjects[pitch]) {
                await soundObjects[pitch].stopAsync();
            }
        } catch (error) {
            console.warn(error);
        }
    }
}

export default Player;
