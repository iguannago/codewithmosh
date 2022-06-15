import React from 'react';
import './App.css';
import ReminderList from './components/ReminderList';

function App() {
  return (
    <div className='App'>
      <ReminderList items={[{ id: 1, title: 'book' }]} />
    </div>
  );
}

export default App;
