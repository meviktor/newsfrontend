import React from 'react';
import { WebView } from 'react-native-webview';

const Browser = ({route, navigation}) => {
    return (
        <>
            <WebView source={{ uri: route.params.url }}/>
        </>
    );
};

export default Browser;
