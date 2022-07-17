import { containerStyles } from '../styles/index';
import { View, StyleSheet, Text, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import PianoKeyboard from './PianoKeyboard';
import { SelectedPitchDataContextProvider } from '../contexts/selected-pitch-data-context';
import OrientationContext from '../contexts/orientation-context';

const Main = () => {
    const ctx = useContext(OrientationContext);

    const SmallPiano = () => {
        return <PianoKeyboard first="c3" last="c4" />;
    };
    const LargePiano = () => {
        return <PianoKeyboard first="a2" last="c5" />;
    };

    return (
        <>
            <Text>{ctx.orientation.orientation}</Text>
            {ctx.orientation.orientation === 'PORTRAIT' ? (
                <SmallPiano />
            ) : (
                <LargePiano />
            )}
            {/* <PianoKeyboard first="a2" last="c5" /> */}

        </>
    );
};

// const Main = () => {
//     return (
//         <View style={styles.cardContainer}>
//             <SelectedPitchDataContextProvider>
//                 <Card />
//             </SelectedPitchDataContextProvider>
//         </View>
//     );
// };

const styles = StyleSheet.create({
    cardContainer: {
        ...containerStyles.cardContainer,
    },
});

export default Main;
