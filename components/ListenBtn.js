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
        backgroundColor: 'rgb(222,222,222)',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 14,
        marginBottom: 16,
        width: 120,
    },
    appButtonText: {
        fontSize: 16,
        color: 'rgb(0,0,0)',
        fontWeight: 'normal',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});

export default ListenBtn;
