import { useContext } from 'react';
import SelectedPitchDataContext from '../contexts/selected-pitch-data-context';

export function parseSharpsOrFlats(key) {
    const selectedPitchDataCtx = useContext(SelectedPitchDataContext);

    if (key.length > 1) {
        let splitKeyName = key.split('/');
        return selectedPitchDataCtx.sharpsOrFlats === 'Sharps'
            ? splitKeyName[0]
            : splitKeyName[1];
    } else {
        return key;
    }
}
