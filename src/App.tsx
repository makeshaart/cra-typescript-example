import { type } from 'os';
import React from 'react';
import './App.css';
import Floor from './components/Floor/Floor';

function App() {
  type myProps={
    message: string;
  };
  type myState={
    count: number;
  }
  return (
    <div className="App">
      <Floor/>
      <textarea></textarea>
    </div>
  );
}

export default App;
