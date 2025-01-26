// Listing 4.8 Setting various border combinations
/*
    Adding a border around a component is the best way to give screen elements a concrete, real feeling. 
    There are quite a few border properties, but conceptually there are only four: 
        borderColor
        borderRadius
        borderStyle
        borderWidth. 

        For the color, there are individual properties for each side of the border: 
        borderTopColor
        borderRightColor
        borderBottomColor
        borderLeftColor
        
        For the width, there are individual properties for each side of the border: 
        borderTopWidth
        borderRightWidth
        borderBottomWidth
        borderLeftWidth. 
        
        For the border radius, there are properties for each corner: 
        borderTopRightRadius
        borderBottomRightRadius
        borderBottomLeftRadius
        borderTopLeftRadius
        
        But there’s only one borderStyle.
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
           <Example style={{borderWidth: 1}}>
               <Text>borderWidth: 1</Text>
           </Example>
           <Example style={{borderWidth: 3, borderLeftWidth: 0}}> 
               <Text>borderWidth: 3, borderLeftWidth: 0</Text>
           </Example>
           <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
               <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
           </Example>
           <Example style={{borderLeftWidth: 3}}>
               <Text>borderLeftWidth: 3</Text>
           </Example>
           <Example style={{borderWidth: 1, borderStyle: 'dashed'}}> 
               <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
           </Example>
         </View>
      );
    }
}

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    example: {
        marginBottom: 15
    }
});