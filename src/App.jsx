import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    fetch('/api/v1/greetings')
      .then(response => response.json())
      .then(data => {
        console.log('Data from API:', data); // Log the data
        setGreetings(data);
      })
      .catch(error => console.error('Error fetching greetings:', error));
  }, []);

  return (
    <div>
      <h1>Greetings App</h1>
      <ul>
        {greetings.map(greeting => (
          <li key={greeting.id}>{greeting.greeting}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
