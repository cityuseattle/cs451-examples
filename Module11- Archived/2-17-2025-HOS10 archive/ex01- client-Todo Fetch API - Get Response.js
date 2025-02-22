// ex01- client-Todo Fetch API - Get Response
import {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

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
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos', {
        method: 'GET'
      });
      // console.log('response.type =', response.type);
      // console.log('response.url =', response.url);
      // console.log('response.userFinalURL =', response.useFinalURL);
      // console.log('response.status =', response.status);
      // console.log('response.ok =', response.ok);
      // console.log('response.statusText =', response.statusText);
      // console.log('response.headers =', response.headers);

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
          <FlatList
            data={todos}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <Text>
                ID: {item._id}{'\n'} Title: {item.title}{'\n'} Index: {item.todoIndex}{'\n'} Complete: {item.complete} {'\n'}{'\n'}
              </Text>
            )}
          />
        )}
      </View>
    );
  }
}