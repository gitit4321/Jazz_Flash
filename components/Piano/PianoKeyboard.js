import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-native-piano';
import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';

const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
};

const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const PianoKeyboard = props => {
    // const firstNote = MidiNumbers.fromNote('c3');
    // const lastNote = MidiNumbers.fromNote('f5');
    // const keyboardShortcuts = KeyboardShortcuts.create({
    //     firstNote: firstNote,
    //     lastNote: lastNote,
    //     keyboardConfig: KeyboardShortcuts.HOME_ROW,
    // });

    return (
        <DimensionsProvider>
            {({ containerWidth, containerHeight }) => (
                <SoundfontProvider
                    instrumentName="acoustic_grand_piano"
                    audioContext={audioContext}
                    hostname={soundfontHostname}
                    render={({ isLoading, playNote, stopNote }) => (
                        <Piano
                            noteRange={noteRange}
                            width={containerWidth}
                            playNote={playNote}
                            stopNote={stopNote}
                            disabled={isLoading}
                            {...props}
                        />
                    )}
                />
            )}
        </DimensionsProvider>
    );
};

export default PianoKeyboard;
