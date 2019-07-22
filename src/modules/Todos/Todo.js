/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

class Todo extends Component {
  toggleComplete() {
    console.log('data here');
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.toggleComplete()}>
        <View style={{ flex: 1, height: 48, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 8 }}>
            <Text>{this.props.title}</Text>
          </View>
          <View style={{ flex: 2 }}>{this.props.complete && <Text>COMPLETE</Text>}</View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Todo;
