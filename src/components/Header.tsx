import React, { useState } from 'react';

const Header = ({
  onAddTodoPress
}: {
  onAddTodoPress: (todo: string) => void;
}): JSX.Element => {
  const [todo, setTodo] = useState('');

  const handleChange = (value: string): void => {
    setTodo(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' && todo !== '') {
      onAddTodoPress(todo);
      setTodo('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={todo}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(event) => handleChange(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
        data-testid="input-add-todo-field"
      />
    </header>
  );
};

export { Header };
