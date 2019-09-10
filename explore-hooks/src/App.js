import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ButtonHook from './components/ButtonHook';
import DataFetchHooks from './components/DataFetchHooks';

function App() {
  return (
    <div className="App">
      <Button/>
      <br/>
      <ButtonHook/>
      <DataFetchHooks/>

    </div>
  );
}

export default App;
