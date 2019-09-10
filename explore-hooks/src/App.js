import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
//regular button with no hooks using onClick 
import ButtonHook from './components/ButtonHook';
//hooks change state of button onClick
import DataFetchHooks from './components/DataFetchHooks';
//hook is incorporated into the component
import CustomDataFetchHooks from './components/CustomDataFetchHooks';
//hook is separate and handles the fetch so the component doesn't have to

function App() {
  return (
    <div className="App">
      <Button/>
      <br/>
      <ButtonHook/>
      <DataFetchHooks/>
      <CustomDataFetchHooks/>
    </div>
  );
}

export default App;
