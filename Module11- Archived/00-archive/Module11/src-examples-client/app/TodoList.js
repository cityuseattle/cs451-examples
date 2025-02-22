// Listing 3.26 Updating the TodoList component
/*
  The TabBar will filter based on which type is selected.
  Add a filter to return only the todos of the type you currently want back, based on the tab that’s selected.
    Destructure the type out of the props.
    Add the getVisibleTodos function before the return statement.
      You use a switch statement to check which type is currently set. 
      If 'All' is set, you return the entire list of todos. 
      If 'Complete' is set, you filter the todos and only return the complete todos. 
      If 'Active' is set, you filter the todos and only return the incomplete todos.
    You then set the todos variable as the returned value of getVisibleTodos. 
*/

// Listing 3.20 Passing toggleComplete and deleteTodo as props to ToDo
// Listing 3.15 Creating the TodoList component
/*
  The TodoList component takes one property for now: an array of todos. 
  You then map over these todos and create a new Todo component (imported at the top of the file) for each todo, passing in the todo as a property to the Todo component. 
  You also specify a key and pass in the index of the todo item as a key to each component. 
  The key property helps React identify the items that have changed when the diff with the virtual DOM is computed. React will give you a warning if you leave this out.

  You use a switch statement to check which type is currently set. If 'All' is set, you return the entire list of todos. If 'Complete' is set, you filter the todos and only return the complete todos. If 'Active' is set, you filter the todos and only return the incomplete todos.

You then set the todos variable as the returned value of getVisibleTodos. Now you should be able to run the app and see the new TabBar (figure 3.19). The TabBar will filter based on which type is selected.

*/
import React from 'react'
import { View } from 'react-native'

import Todo from './Todo'

/*
  map()
  https://www.w3schools.com/jsref/jsref_map.asp
  
*/

/*
  Pass toggleComplete and deleteTodo as props to the Todo component in the ToDoList component.
*/

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos
      case 'Complete':
        return todos.filter((t) => t.complete)
      case 'Active':
        return todos.filter((t) => !t.complete)
    }
  }
  
  todos = getVisibleTodos(todos, type)

  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo} />
    )
  })

  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList
