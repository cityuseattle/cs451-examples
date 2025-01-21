// Listing 3.12 Creating the Button component

/*
  Destructures the submitTodo function, which was passed as a prop to the componen
  
  tAttaches submitTodo to the onPress function available to the TouchableHighlight component. 
  This function will be called when the TouchableHighlight is touched or pressed.
*/
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

/*
  In this component, you use TouchableHighlight for the first time. 
  TouchableHighlight is one of the ways you can create buttons in React Native and is fundamentally comparable to the HTML button element.
  
  With TouchableHighlight, you can wrap views and make them respond properly to touch events. 
  On press down, the default backgroundColor is replaced with a specified underlayColor property that you’ll provide as a prop. 
  Here you specify an underlayColor of '#efefef', which is a light gray; the background color is white. 
  This will give the user a good sense of whether the touch event has registered. 
  If no underlayColor is defined, it defaults to black.
  
  TouchableHighlight supports only one main child component. 
  Here, you pass in a Text component. 
  If you want multiple components in a TouchableHighlight, wrap them in a single View, and pass this View as the child of the TouchableHighlight.
*/
const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor='#efefef'
      style={styles.button}
      onPress={submitTodo}>
      <Text style={styles.submit}>
        Submit
      </Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    color: '#666666',
    fontWeight: '600'
  }
})

export default Button