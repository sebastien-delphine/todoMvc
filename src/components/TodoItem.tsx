import React from 'react';
import type { Item } from './types';

interface TodoItemProps extends Item {
  onDeleteClick: (id: string) => void;
}
const TodoItem = ({
  label,
  isCompleted,
  id,
  onDeleteClick,
}: TodoItemProps): JSX.Element => {
  return (
    <div>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
        />
        <label>{label}</label>
        <button className="destroy" onClick={() => onDeleteClick(id)}></button>
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </div>
  );
};

export { TodoItem };
