import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { TodoItems } from './components/TodoItems';
import { Footer } from './components/Footer';
import { Info } from './components/Info';
import './App.css';
import type { Item } from './components/types';

const App = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([
    {
      id: uuidv4(),
      label: 'Taste JavaScript',
      isCompleted: true
    },
    {
      id: uuidv4(),
      label: 'Buy a unicorn',
      isCompleted: false
    }
  ]);

  const onDeleteClick = (id: string): void => {
    const itemsFiltered = items.filter((item) => item.id !== id);
    setItems(itemsFiltered);
  };

  const onCompletedClick = (id: string): void => {
    const itemsUpdated = items.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setItems(itemsUpdated);
  };

  const onAddTodoPress = (todo: string): void => {
    const itemsUpdated = [
      ...items,
      { id: uuidv4(), label: todo, isCompleted: false, isEditing: false }
    ];
    setItems(itemsUpdated);
  };

  const onDoubleClick = (id: string): void => {
    const itemsUpdated = items.map((item) => {
      if (item.id === id) {
        return { ...item, isEditing: true };
      }
      return item;
    });
    setItems(itemsUpdated);
  };

  const onBlur = (): void => {
    const itemsUpdated = items.map((item) => ({ ...item, isEditing: false }));
    setItems(itemsUpdated);
  };

  return (
    <div className="App">
      <section className="todoapp">
        <Header onAddTodoPress={onAddTodoPress} />
        <TodoItems
          items={items}
          onDeleteClick={onDeleteClick}
          onCompletedClick={onCompletedClick}
          onDoubleClick={onDoubleClick}
          onBlur={onBlur}
        />
        <Footer />
      </section>
      <Info />
    </div>
  );
};

export default App;
