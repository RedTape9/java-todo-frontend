import React, { useState } from 'react';
import axios from 'axios';
import { TodoType } from './TodoType';

type Props = {
    onNewTodo: (newTodo: TodoType) => void;
}

function AddTodoForm({ onNewTodo }: Props) {
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newTodo = { description, status: 'OPEN' };
            const response = await axios.post('/api/todo', newTodo);
            setDescription('');
            onNewTodo(response.data); // Übergeben des neuen Todos an die App-Komponente
        } catch (error) {
            console.error('Fehler beim Hinzufügen des Todos', error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Neues Todo hinzufügen"
            />
            <button type="submit">Hinzufügen</button>
        </form>
    );
}

export default AddTodoForm;
