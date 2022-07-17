import { containerStyles } from '../styles/index';
import { View, StyleSheet, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import PianoKeyboard from './PianoKeyboard';
import { SelectedPitchDataContextProvider } from '../contexts/selected-pitch-data-context';

const Main = () => {
    return <PianoKeyboard first="c4" last="f5" />;
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
