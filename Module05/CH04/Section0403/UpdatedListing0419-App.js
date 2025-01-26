// Listing 4.19 Examples of styling Text components
/*
A is italic text using {fontStyle: 'italic'}.

B shows text decoration with an underline and a line through the text. 
The style for this is {textDecorationLine: 'underline line-through'}.

C expands on example B by also applying some iOS-only text styles, {textDecorationColor: 'red', textDecorationStyle: 'dotted'}. 
Notice how these styles have no effect in Android.

D applies a shadow using {textShadowColor: 'red', textShadowOffset: {width: -2, height: -2}, textShadowRadius: 4}.

E uses the iOS-only {letterSpacing: 5}, which doesn’t affect Android.
The text ios and android is styled using {textAlign: 'center', fontWeight: 'bold'}.

*/
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LeftText style={{fontStyle: 'italic'}}>
          A) Italic
        </LeftText>
        <LeftText style={{textDecorationLine: 'underline line-through'}}>
          B) Underline and Line Through
        </LeftText>
        <LeftText style={{textDecorationLine: 'underline line-through',
                          textDecorationColor: 'red',
                          textDecorationStyle: 'dotted'}}>
          C) Underline and Line Through
        </LeftText>
        <LeftText style={{textShadowColor: 'red',
                          textShadowOffset: {width: -2, height: -2},
                          textShadowRadius: 4}}>
          D) Text Shadow
        </LeftText>
        <LeftText style={{letterSpacing: 5}}>
          E) Letter Spacing
        </LeftText>
        <LeftText style={{textAlign: 'center', fontWeight: 'bold'}}>
          {Platform.OS}
        </LeftText>
      </View>
    );
  }
}

const LeftText = (props) => (
    <Text style={[styles.leftText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        margin: 40,
        marginTop: 100
    },
    leftText: {
        fontSize: 20,
        paddingBottom: 10
    }
});