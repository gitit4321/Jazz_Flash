import React, { useEffect, useState, createContext } from 'react';
import { Dimensions } from 'react-native';

const OrientationContext = createContext({
    orientation: 'LANDSCAPE',
    screenWidth: null,
    screenHeight: null,
});

export const OrientationProvider = props => {
    const [orientation, setOrientation] = useState({
        orientation: 'LANDSCAPE',
        screenWidth: null,
        screenHeight: null,
    });

    const determineAndSetOrientation = () => {
        let width = Dimensions.get('screen').width;
        let height = Dimensions.get('screen').height;

        if (width < height && orientation.orientation !== 'PORTRAIT') {
            setOrientation({
                orientation: 'PORTRAIT',
                screenWidth: width,
                screenHeight: height,
            });
        } else {
            setOrientation({
                orientation: 'LANDSCAPE',
                screenWidth: width,
                screenHeight: height,
            });
        }
    };

    useEffect(() => {
        determineAndSetOrientation();
        const subscription = Dimensions.addEventListener('change', determineAndSetOrientation); // prettier-ignore

        return () => {
            subscription.remove();
        };
    }, []);

    // console.log(orientation, 'rendering');

    return (
        <OrientationContext.Provider value={{ orientation }}>
            {props.children}
        </OrientationContext.Provider>
    );
};

export default OrientationContext;
