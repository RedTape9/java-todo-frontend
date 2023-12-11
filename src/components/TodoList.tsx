import React from 'react';
import TodoItem from './TodoItem';


type TodoType = {
    id: string;
    description: string;
    status: string;
}

type Props = {
    todos: TodoType[];
    onUpdate: (id: string, updatedTodo: TodoType) => void;
    onDelete: (id: string) => void;
}

function TodoList({ todos, onUpdate, onDelete }: Props) {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;