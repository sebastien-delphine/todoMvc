import React from 'react';
import { TodoItem } from './TodoItem';
import type { Item } from './types';

const TodoItems = ({
  items,
  onDeleteClick,
  onCompletedClick
}: {
  items: Item[];
  onDeleteClick: (id: string) => void;
  onCompletedClick: (id: string) => void;
}): JSX.Element => {
  return (
    <div>
      {/* <!--TODO This section should be hidden by default and shown when there are todos --> */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/*
              <!--TODO List items should get the class `editing` when editing -->
            */}
          {items.map((item) => (
            <li
              className={item.isCompleted ? 'completed' : ''}
              key={`todo_item_${item.id}`}>
              <TodoItem
                id={item.id}
                label={item.label}
                isCompleted={item.isCompleted}
                onDeleteClick={onDeleteClick}
                onCompletedClick={onCompletedClick}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export { TodoItems };
