import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ListenBtn = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: 'rgb(57,96,58)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 16,
        width: 120,
    },
    appButtonText: {
        fontSize: 18,
        color: 'rgb(220,227,224)',
        fontWeight: 'normal',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});

export default ListenBtn;
