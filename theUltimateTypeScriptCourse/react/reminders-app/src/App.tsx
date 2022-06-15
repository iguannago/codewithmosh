import React, { useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';

function App() {
  const [reminders] = useState<Reminder[]>([
    { id: 1, title: 'the ultimate TS course' },
  ]);

  return (
    <div className='App'>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
