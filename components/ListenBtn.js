import React from 'react';
import { Button, StyleSheet } from 'react-native';

const ListenButton = () => {
    return <Button title="Listen"></Button>;
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
});

export default ListenButton;
