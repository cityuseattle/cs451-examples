// Listing 3.11 Creating the todoIndex variable

/*
  Now that the value of the inputValue is being stored in the state, 
  you need to create a button to add the items to a list of todos. 
  Before you do, create a function that you’ll bind to the button to 
  add the new todo to the array of todos defined in the constructor. 
  Call this function submitTodo, and place it after the inputChange function and before the render function.
*/
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Heading from './Heading'
import Input from './Input'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  /*
    Creates the inputChange method, which takes inputValue as an argument.

    Logs out the inputValue value to make sure the method is working.

    setState() 
      https://reactjs.org/docs/react-component.html#setstate
      It enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.

    Sets the state with the new value—same as this.setState({inputValue: inputValue}).
  */
  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  /*
    Checks whether inputValue is empty or only contains whitespace. If it’s empty, returns without doing anything else.

    If inputValue isn’t empty, creates and assigns a todo variable an object with a title, a todoIndex, 
    and a complete Boolean (you’ll create the todoIndex shortly).

    Increments the todoIndex
    
    Pushes the new todo to the existing array of todos
    
    Sets the state of the todos to match the updated array of this.state.todos, and resets inputValue to an empty string
    
    Once the state is set, you have the option to pass a callback function. 
    Here, a callback function from setState logs out the state to make sure everything is working.
  */
  submitTodo () { 
    if (this.state.inputValue.match(/^\s*$/)) {   
      return  
    }   
    const todo = {   
      title: this.state.inputValue,   
      todoIndex,  
      complete: false   
    }   
    todoIndex++    
    const todos = [...this.state.todos, todo]   
    this.setState({ todos, inputValue: '' }, () => {    
      console.log('State: ', this.state)
    }) 
  }

  /*
    <Input >
    Passes inputValue as a property to the Input component.
    Passes inputChange as a property to the Input component.
  */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
          <View>
            <Heading />
            <Input 
              inputValue={this.state.inputValue}
              inputChange={(text) => this.inputChange(text)} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App
