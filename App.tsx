import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoApp from './Component/TodoApp';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodoApp />
    </View>
  );
};

export default App

const styles = StyleSheet.create({})