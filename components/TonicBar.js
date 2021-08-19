import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Button,
    ScrollView,
} from 'react-native';

const TonicBar = props => {
    return (
        <View style={styles.barContainer}>
            <ScrollView horizontal>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="C"></Button>
                </View>
                <View style={styles.accidentalTonicContainer}>
                    <Button
                        style={styles.btn}
                        color="black"
                        title="C#/Db"
                    ></Button>
                </View>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="D"></Button>
                </View>
                <View style={styles.accidentalTonicContainer}>
                    <Button
                        style={styles.btn}
                        color="black"
                        title="D#/Eb"
                    ></Button>
                </View>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="E"></Button>
                </View>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="F"></Button>
                </View>
                <View style={styles.accidentalTonicContainer}>
                    <Button
                        style={styles.btn}
                        color="black"
                        title="F#/Gb"
                    ></Button>
                </View>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="G"></Button>
                </View>
                <View style={styles.accidentalTonicContainer}>
                    <Button
                        style={styles.btn}
                        color="black"
                        title="G#/Ab"
                    ></Button>
                </View>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="A"></Button>
                </View>
                <View style={styles.accidentalTonicContainer}>
                    <Button
                        style={styles.btn}
                        color="black"
                        title="A#/Bb"
                    ></Button>
                </View>
                <View style={styles.naturalTonicContainer}>
                    <Button style={styles.btn} color="black" title="B"></Button>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(180,187,184)',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%',
        width: '90%',
        marginBottom: '2%',
        borderRadius: 10,
    },
    naturalTonicContainer: {
        flex: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 4,
        paddingHorizontal: 10,
    },
    accidentalTonicContainer: {
        flex: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    btn: {
        color: 'black',
        width: '100%',
    },
});

export default TonicBar;
