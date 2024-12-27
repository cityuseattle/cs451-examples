// State in a Class Component
import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

class Cat extends Component {
  state = {isHungry: true};

  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? ' hungry' : ' full'}!
        </Text>
        <Button
          onPress={() => {
            this.setState({isHungry: false});
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? 'Pour me some milk, please!' : 'Thank you!'
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
      <Cat name="Garfield" />
      <Cat name="Bob" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cafe;