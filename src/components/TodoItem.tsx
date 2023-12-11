
import { TodoType } from './TodoType';

type Props = {
    todo: TodoType;
    onUpdate: (id: string, updatedTodo: TodoType) => void;
    onDelete: (id: string) => void;
}

function TodoItem({ todo, onUpdate, onDelete }: Props) {
    const handleStatusChange = (newStatus: string) => {
        onUpdate(todo.id, { ...todo, status: newStatus });
    };

    return (
        <div className="card">
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => handleStatusChange('IN_PROGRESS')}>In Bearbeitung</button>
            <button onClick={() => handleStatusChange('DONE')}>Erledigt</button>
            {todo.status === 'DONE' && <button onClick={() => onDelete(todo.id)}>Löschen</button>}
        </div>
    );
}

export default TodoItem;
