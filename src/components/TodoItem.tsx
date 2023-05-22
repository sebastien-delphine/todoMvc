import React from 'react';
import type { Item } from './types';

const TodoItem = ({
  label,
  isCompleted,
  id,
}: Item): JSX.Element => {
  return (
    <div>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
        />
        <label>{label}</label>
        <button 
          className="destroy"
        ></button>
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </div>
  );
};

export { TodoItem };
