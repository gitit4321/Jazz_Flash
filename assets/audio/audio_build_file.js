import { Audio } from 'expo-av';

export async function handleaudio(pitch) {
    const soundObject = new Audio.Sound();
    try {
        // soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        await soundObject.loadAsync(
            {
                uri: `https://d1pzp51pvbm36p.cloudfront.net/FluidR3_GM/acoustic_grand_piano-mp3/${pitch}.mp3`,
            },
            {},
            true
        );

        // console.warn('success');
        soundObject.playAsync();
    } catch (error) {
        console.warn(
            'error',
            error,
            `https://d1pzp51pvbm36p.cloudfront.net/FluidR3_GM/acoustic_grand_piano-mp3/${pitch}.mp3`
        );
    }
}
