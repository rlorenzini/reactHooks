import React from 'react';
import ComponentProvider from './components/ComponentProvider';
import BaseLayout from './components/BaseLayout';

function App() {
  return (
    <ComponentProvider>
      <BaseLayout/>
    </ComponentProvider>
  );
}

export default App;
