import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardFront = props => {
    return (
        <View style={styles.container}>
            <View style={styles.chordSymbolContainer}>
                <Text>Chord Symbol</Text>
                <Text style={styles.chordSymbol}>Cmi7</Text>
                <Text>(also written as C-7, Cm7)</Text>
            </View>
            <View style={styles.chordFunctionContainer}>
                <Text>Chord Function</Text>
                <Text>
                    <Text style={styles.chordSymbol}>IImi7</Text>
                    in a major key
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgb(180,187,184)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '90%',
        width: '90%',
        borderRadius: 10,
    },
    chordSymbolContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
    },
    chordFunctionContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
    },
    label: {},
    chordSymbol: {
        fontSize: 50,
        fontWeight: '500',
    },
});

export default CardFront;
