// Listing 4.16 Displaying monospaced fonts on iOS and Android
/*
    You can make text more compelling and attractive to the end user. 
    We’ll discuss these properties: 
        fontFamily
        fontSize
        fontStyle
        fontWeight.
    
    fontFamily: How to select fonts based on the OS 
    The American Typewriter font rendered on iOS and the generic monospace font used on Android.
*/

import React, { Component } from 'react';
/*
    Imports the Platform component from react-native
*/
import { Platform, StyleSheet, Text, View} from 'react-native';  

/*
    Platform.OS can also tell you what OS the code is running on.
*/
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CenteredText>
                        Listing 4.16 {"\n"}I am a monospaced font on both platforms
                    </CenteredText>
                    <BottomText>
                        {Platform.OS}
                    </BottomText>
                </View>
            </View>
        );
    }
}

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

/*
    Takes advantage of your absolute positioning knowledge
*/
const BottomText = (props) => (
    <CenteredText style={[{position: 'absolute', bottom: 0},
                          props.style]}>
        {props.children}
    </CenteredText>
);

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        margin: 40,
        marginTop: 100,
        borderWidth: 1
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    /*
        Uses Platform.select to pick the styles for the appropriate platform

        Spread Operator
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    */
    centeredText: {
        textAlign: 'center',
        margin: 10,
        fontSize: 24,
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter'
            },
            android: {
                fontFamily: 'monospace'
            }
        })
    }
});
