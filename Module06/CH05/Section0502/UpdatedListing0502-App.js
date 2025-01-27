// Listing 5.2 Scaling squares using scale, scaleX, and scaleY

/*
  Move components from one position to another.
  Rotate components about all three axes.
  Scale and skew components in the x and y directions.

  Transformation power comes from sequencing them together to form animations.

  The origin of the x- and y-axes is at upper left, meaning the positive direction for y is down the screen. 
  You saw this with absolute positioning in the previous chapter, but it’s likely the opposite of what you’re used to, 
  which can make it hard to reason about what a transformation will do.
  
  The origin for rotations and translations is always at the element’s original location. 
  You can’t translate an object in the x or y direction and then rotate it about a new center point.


  ex) transform: [{rotate: '90deg', scale: .5}] 

  The transform style supports the following properties:
  perspective gives an element 3D space by affecting the distance between the z plane and the user.

  translateX and translateY
  By combining translateX and translateY, you can move components in any direction in the Cartesian plane (x-y plane).

  rotateX, rotateY, and rotateZ (rotate)
  
  scale, scaleX, and scaleY
  skewX and skewY
  For instance, scaling can be used to create thumbnails of objects. 

  
  You’ll learn the basics of scaling objects and then use those skills to create a thumbnail of the ProfileCard that opens to full size when pressed. 
  
  Later, this chapter discusses flexbox and how it can be used to manage a bunch of ProfileCard thumbnails in a gallery interface, from which you can press profiles to view them in more detail.

*/

import { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Example style={{}}>A,1</Example>
        <Example style={{transform: [{scale: 0.5}]}}>B,0.5</Example>
        <Example style={{transform: [{scale: 2}]}}>C,2</Example>
        <Example style={{transform: [{scaleX: 3}]}}>D,X3</Example>
        <Example style={{transform: [{scaleY: 1.5}]}}>E,Y1.5</Example>
      </View>
    );
  }
}

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        <Text>
            {props.children}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center',
        flex: 1
    },
    example: {
        width: 50,
        height: 50,
        borderWidth: 2,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
});