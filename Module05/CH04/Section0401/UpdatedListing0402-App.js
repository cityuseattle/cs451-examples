// Listing 4.2 Referencing styles defined in a StyleSheet
/*
    Internal style
    Separating the styles from the render method makes the code easier to understand and promotes reuse of styles across components.
*/
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

/*
    References the container style defined in the styles stylesheet.
    Uses an array to reference both the message and warning styles from the stylesheet.

*/
export default class App extends Component {
  render () {
    return (
      <View style={styles.container}> 
        <Text style={[styles.message,styles.warning]}>Listing 4.2 Some Text</Text>
      </View>    
    )
  }
}

/*
    Defines the styles using StyleSheet.create
*/
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20
  },
  message: { 
    fontSize: 18
  },
  warning: { 
    color: 'red'      
  }
});