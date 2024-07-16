import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoContent, setNewTodoContent] = useState('');

  useEffect(() => {
    // Here you could fetch initial todos from an API or local storage
    // For simplicity, let's use mock data
    setTodos([
      { id: 1, title: 'Đi chợ', content: 'Mua đồ ăn', completed: false },
      { id: 2, title: 'Đi bác sĩ', content: 'Kiểm tra sức khỏe', completed: true },
      { id: 3, title: 'Học React Native', content: 'Xem hướng dẫn từ OpenAI', completed: false },
    ]);
  }, []);

  const addTodo = () => {
    if (newTodoTitle.trim() === '') return;
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      content: newTodoContent,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
    setNewTodoContent('');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTitle, updatedContent) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title: updatedTitle, content: updatedContent } : todo
    );
    setTodos(updatedTodos);
  };

  const countCompletedTodos = () => todos.filter(todo => todo.completed).length;
  const countIncompleteTodos = () => todos.filter(todo => !todo.completed).length;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Danh sách công việc</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text>Đã hoàn thành: {countCompletedTodos()}</Text>
        <Text>Chưa hoàn thành: {countIncompleteTodos()}</Text>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onSaveEdit={editTodo}
            onPressDelete={() => deleteTodo(item.id)}
            onPressToggle={() => toggleTodo(item.id)}
          />
        )}
        ListFooterComponent={
          <View style={{ marginTop: 20 }}>
            <TextInput
              placeholder="Tiêu đề công việc mới"
              style={{ borderBottomWidth: 1, marginBottom: 10, padding: 5 }}
              value={newTodoTitle}
              onChangeText={text => setNewTodoTitle(text)}
            />
            <TextInput
              placeholder="Nội dung công việc mới"
              style={{ borderBottomWidth: 1, marginBottom: 10, padding: 5 }}
              value={newTodoContent}
              onChangeText={text => setNewTodoContent(text)}
            />
            <TouchableOpacity onPress={addTodo} style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Thêm công việc</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default TodoApp;
