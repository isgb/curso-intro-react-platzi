import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
]; */



function App() {

  /*
  console.log('Render antes de use effect');
  React.useEffect(()=>{
    console.log('use effect');
  },[totalTodos]);
  console.log('Render luego de use effect');
  */
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
