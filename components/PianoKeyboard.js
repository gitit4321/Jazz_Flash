import { useEffect } from 'react';
import { Piano } from 'react-native-piano';
import Player from '../assets/Player';
import soundLibrary from '../assets/soundLibrary';

const PianoKeyboard = props => {
    useEffect(() => {
        Player.load(soundLibrary);
    }, []);

    return (
        <Piano
            noteRange={{ first: props.first, last: props.last }}
            onPlayNoteInput={Player.playSound}
            onStopNoteInput={Player.stopSound}
        />
    );
};

export default PianoKeyboard;
