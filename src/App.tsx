import React, { useState } from 'react';
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

  const onAddTodoPress = (todo: string): void => {
    const itemsUpdated = [
      ...items,
      { id: uuidv4(), label: todo, isCompleted: false }
    ];
    setItems(itemsUpdated);
  };

  return (
    <div className="App">
      <section className="todoapp">
        <Header onAddTodoPress={onAddTodoPress} />
        <Footer />
      </section>
      <Info />
    </div>
  );
};

export default App;
