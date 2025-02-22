//Listing 3.12 Creating the Button component
/*
  Since the value of the inputValue is being stored in the state, you need to create a button to add the items to a list of todos. 
  
  Before creating the button,  a newly genreated todo can be added to the arrays of todos.
  Step 1) Listing 3.10
  Create a function called  submitTodo () that you’ll bind to the button to add the new todo to the array of todos defined in the constructor. 
  Call this function submitTodo, and place it after the inputChange function and before the render function.

  Step 2) Listing 3.11
  Create the todoIndex variable at the top of the App.js file
  Since the variables that are defined outside the class, any methods can access it.

  After creating the submitTodo ()
  Step 3) Listing 3.12
  Create a file called Button.js and wire up the the submitTodo function to work with the button.

  After creating a button,
  Step 4) Listing 3.13
  You’ve created the Button component and wired it up with the function defined in App.js. 
  Binds the submitTodo method to the class in the constructor.
*/
import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

/*
  TouchableHighlight
  https://reactnative.dev/docs/touchablehighlight

  A wrapper for making views respond properly to touches. 
  On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.
  TouchableHighlight must have one child (not zero or more than one).
*/

/*
  Destructures the submitTodo function, which was passed as a prop to the component.

  TouchableHighlight is one of the ways you can create buttons in React Native and is fundamentally comparable to the HTML button element.
  With TouchableHighlight, you can wrap views and make them respond properly to touch events. 
  On press down, the default backgroundColor is replaced with a specified underlayColor property that you’ll provide as a prop. 
  Here you specify an underlayColor of '#efefef', which is a light gray; the background color is white. 
  This will give the user a good sense of whether the touch event has registered. 
  If no underlayColor is defined, it defaults to black.
  TouchableHighlight supports only one main child component. 
  Here, you pass in a Text component. 
  If you want multiple components in a TouchableHighlight, wrap them in a single View, and pass this View as the child of the TouchableHighlight.

  Attaches submitTodo to the onPress function available to the TouchableHighlight component. 
  This function will be called when the TouchableHighlight is touched or pressed.
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