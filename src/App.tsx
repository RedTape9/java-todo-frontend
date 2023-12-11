import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { TodoType } from './components/TodoType';
import './App.css';
import Header from "./components/Header.tsx";



function App() {
    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('/api/todo');
            setTodos(response.data);
        } catch (error) {
            console.error('Fehler beim Laden der Todos', error);
        }
    };

    const addTodo = async (newTodo: TodoType) => {
        if (newTodo.description.trim() !== '') {
            setTodos([...todos, newTodo]);
        } else {
            alert('Das Eingabefeld darf nicht leer sein.');
        }
    };

    const updateTodo = async (id: string, updatedTodo: TodoType) => {
        try {
            await axios.put(`/api/todo/${id}`, updatedTodo);
            setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Todos', error);
        }
    };

    const deleteTodo = async (id: string) => {
        try {
            await axios.delete(`/api/todo/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Fehler beim Löschen des Todos', error);
        }
    };

    return (
        <div className="App">
            <Header />
            <AddTodoForm onNewTodo={addTodo} />
            <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
        </div>
    );
}

export default App;
