import { createContext, useState } from 'react';

const SelectedPitchDataContext = createContext({
    selectedKey: '',
    selectedChordQ: '',
    selectedScaleType: '',
    selectedClef: '',
    sharpsOrFlats: '',
    displayScaleName: '',
    internalScaleName: '',
    scaleOptions: [],
    onKeyChange: key => {},
    onChordQualityChange: chordQuality => {},
    onScaleTypeChange: scaleName => {},
    onClefChange: clef => {},
    onSharpsOrFlatsChange: accidental => {},
    onDisplayScaleNameChange: displayScaleName => {},
    oninternalScaleNameChange: internalScaleName => {},
    onScaleOptionsChange: scaleOptions => {},
});

export const SelectedPitchDataContextProvider = props => {
    const [selectedKey, setSelectedKey] = useState('C');
    const [selectedChordQ, setSelectedChordQ] = useState('6/9');
    const [selectedScaleType, setSelectedScaleType] = useState('major');
    const [selectedClef, setSelectedClef] = useState('Treble');
    const [sharpsOrFlats, setSharpsOrFlats] = useState('Flats');
    const [displayScaleName, setDisplayScaleName] = useState('Major/Ionian');
    const [internalScaleName, setInternalScaleName] = useState('major');
    const [scaleOptions, setScaleOptions] = useState([
        {
            userDisplay: 'Major/Ionian',
            programUse: 'major',
        },
        {
            userDisplay: 'Major Pentatonic',
            programUse: 'majorPentatonic',
        },
    ]);

    const handleKeyChange = key => {
        setSelectedKey(key);
    };
    const handleChordQualityChange = chordQuality => {
        setSelectedChordQ(chordQuality);
    };
    const handleScaleTypeChange = scaleName => {
        setSelectedScaleType(scaleName);
    };
    const handleClefChange = clef => {
        setSelectedClef(clef);
    };
    const handleSharpsOrFlatsChange = accidental => {
        setSharpsOrFlats(accidental);
    };
    const handleDisplayScaleNameChange = scaleName => {
        setDisplayScaleName(scaleName);
    };
    const handleInternalScaleNameChange = scaleName => {
        setInternalScaleName(scaleName);
    };
    const handleScaleOptionsChange = chordQuality => {
        const chordScaleOptions = getChordScaleOptions(chordQuality);
        setScaleOptions(chordScaleOptions);
    };

    return (
        <SelectedPitchDataContext.Provider
            value={{
                selectedKey: selectedKey,
                selectedChordQ: selectedChordQ,
                selectedScaleType: selectedScaleType,
                selectedClef: selectedClef,
                sharpsOrFlats: sharpsOrFlats,
                displayScaleName: displayScaleName,
                internalScaleName: internalScaleName,
                scaleOptions: scaleOptions,
                onKeyChange: handleKeyChange,
                onChordQualityChange: handleChordQualityChange,
                onScaleTypeChange: handleScaleTypeChange,
                onClefChange: handleClefChange,
                onSharpsOrFlatsChange: handleSharpsOrFlatsChange,
                onDisplayScaleNameChange: handleDisplayScaleNameChange,
                onInternalScaleNameChange: handleInternalScaleNameChange,
                onScaleOptionsChange: handleScaleOptionsChange,
            }}
        >
            {props.children}
        </SelectedPitchDataContext.Provider>
    );
};
