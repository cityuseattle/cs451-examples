// ex02- client-Todo Fetch API - Get Response
import {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: true,
    };
  }

  async getTodos() {
    try {
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos/5', {
        method: 'GET'
      });
      const todos = await response.json();
      this.setState({todos});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    const {todos, isLoading} = this.state;

    return (
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
          ) : (
            <View>
              <Text>ID: {todos._id}</Text>
              <Text>Title: {todos.title}</Text>
              <Text>Todo Index: {todos.todoIndex}</Text>
              <Text>Complete: {todos.complete}</Text>
            </View>
          )
        }
      </View>
    );
  }
}