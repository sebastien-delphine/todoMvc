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
      id: 1,
      label: 'Taste JavaScript',
      isCompleted: true
    },
    {
      id: 2,
      label: 'Buy a unicorn',
      isCompleted: false
    }
  ]);

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <Header />
        <TodoItems
          items={items}
        />
        <Footer />
      </section>
      <Info />
    </div>
  );
};

export default App;
