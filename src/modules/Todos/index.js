/* eslint-disable no-console */
import React, { Component } from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
import db from '../../../configs/firebase';
import Todo from './Todo';

class Todos extends Component {
  state = {
    textInput: '',
    loading: true,
    todos: []
  };

  updateTextInput(value) {
    this.setState({ textInput: value });
  }

  addTodo = () => {
    console.log('Add Data Here !!');
  };

  componentDidMount() {
    db.collection('todos')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ todos: data, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Add TODO"
          value={this.state.textInput}
          onChangeText={text => this.updateTextInput(text)}
        />
        <Button
          title="Add TODO"
          disabled={!this.state.textInput.length}
          onPress={() => this.addTodo()}
        />
        <FlatList data={this.state.todos} renderItem={({ item }) => <Todo {...item} />} />
      </View>
    );
  }
}

export default Todos;
