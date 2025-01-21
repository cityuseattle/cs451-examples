// Listing 3.13 Importing the Button component

/*
  Imports the new Button component
  
  Binds the method to the class in the constructor. 
  Because you’re using classes, functions won’t be auto-bound to the class.
  
  Place the Button below the Input component, and pass in submitTodo as a prop.
*/
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Heading from './Heading'
import Input from './Input'
import Button from './Button'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this) 
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
          <Button submitTodo={this.submitTodo} />
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
