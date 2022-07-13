import React from 'react';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DimensionsProvider = props => {
    return <div>{props.children}</div>;
};

export default DimensionsProvider;
