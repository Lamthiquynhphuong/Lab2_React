import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, onPressEdit, onPressDelete, onPressToggle }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{todo.title}</Text>
        <Text>{todo.content}</Text>
      </View>
      <TouchableOpacity onPress={onPressToggle} style={{ padding: 10 }}>
        <Text style={{ color: todo.completed ? 'green' : 'red' }}>{todo.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressEdit} style={{ padding: 10 }}>
        <Text style={{ color: 'blue' }}>Sửa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete} style={{ padding: 10 }}>
        <Text style={{ color: 'red' }}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
