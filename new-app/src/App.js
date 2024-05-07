import { useState } from 'react';
import './App.css';
import nextId from 'react-id-generator';
import WatchesList from './components/WatchesList/WatchesList';
import AddForm from './components/AddForm/AddForm';

const startData = [
  { id: nextId(), name: 'New York', timeZone: -4 },
  { id: nextId(), name: 'Moscow', timeZone: 3 },
  { id: nextId(), name: 'London', timeZone: 1 },
  { id: nextId(), name: 'Tokyo', timeZone: 9 },
];

function App() {
  const [state, setState] = useState([]);

  function addWatch(data) {
    if (data.name === '' || data.timeZone === '') return null;

    const newState = {
      id: nextId(),
      name: data.name,
      timeZone: data.timeZone,
    };

    setState((prevState) => [...prevState, newState]);
  }

  function deleteWatch(id) {
    setState((prevState) => prevState.filter((watch) => watch.id !== id));
  }

  return (
      <div className='App'>
        <AddForm onSubmit={addWatch} />
        <WatchesList watches={state} onDelete={deleteWatch} />
      </div>
  );
}

export default App;