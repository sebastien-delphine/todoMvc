import React from 'react';
import { TodoItem } from './TodoItem';
import type { Item } from './types';

const TodoItems = ({
  items,
  onDeleteClick,
  onCompletedClick,
  onDoubleClick,
  onBlur
}: {
  items: Item[];
  onDeleteClick: (id: string) => void;
  onCompletedClick: (id: string) => void;
  onDoubleClick: (id: string) => void;
  onBlur: () => void;
}): JSX.Element => {
  const getTodoStatus = ({
    isCompleted,
    isEditing
  }: {
    isCompleted: boolean;
    isEditing: boolean | undefined;
  }): string => {
    if (isEditing === true) {
      return 'editing';
    }
    if (isCompleted) {
      return 'completed';
    }
    return '';
  };

  if (items.length === 0) {
    return <></>;
  }

  return (
    <div>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/*
              <!--TODO List items should get the class `editing` when editing -->
            */}
          {items.map((item) => {
            const classNameValue = getTodoStatus({
              isCompleted: item.isCompleted,
              isEditing: item.isEditing
            });

            return (
              <li
                className={classNameValue}
                key={`todo_item_${item.id}`}
                onDoubleClick={() => onDoubleClick(item.id)}
                onBlur={() => onBlur()}>
                <TodoItem
                  id={item.id}
                  label={item.label}
                  isCompleted={item.isCompleted}
                  onDeleteClick={onDeleteClick}
                  onCompletedClick={onCompletedClick}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export { TodoItems };
