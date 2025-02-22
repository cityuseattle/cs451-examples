// Listing 3.21 Updating Todo.js to bring in TodoButton and functionality
/*
  Update the Todo component to bring in the new TodoButton component and some styling for the button container.
*/

// Listing 3.14 Creating the Todo component
/*
  Now that you’re adding todos to the array of todos, you need to render them to the screen. 
  To get started with this, you need to create two new components: TodoList and Todo. 
  TodoList will render the list of Todos and will use the Todo component for each individual todo. 
  Begin by creating a file named Todo.js in the app folder.

  The Todo component takes one property for a todo and renders the title in a Text component. 
  You also add styling to the View and Text components.
*/
import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

import TodoButton from './TodoButton'

/*
  You add two TodoButtons: one named Done, and one named Delete. 
  You also pass toggleComplete and deleteTodo as functions to be called as the onPress you defined in TodoButton.js. 
  If you refresh the app and add a todo, you should now see the new buttons.

  If you click Done, the button text should be bold and green. 
  If you click Delete, the todo should disappear from the list of todos.
*/
const Todo = ({ todo, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>
      {todo.title}
    </Text>
    <View style={styles.buttons}>
      <TodoButton
        name='Done'
        complete={todo.complete}
        onPress={() => toggleComplete(todo.todoIndex)} />
      <TodoButton
        name='Delete'
        onPress={() => deleteTodo(todo.todoIndex)} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})

export default Todo