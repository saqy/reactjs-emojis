import React from 'react';
import './App.css';
import Emoji from './components/Emoji';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Emoji name="cat" size="100"/>
        <Emoji name="woman" />
        <Emoji name="smile" />
        <Emoji name="peach" />
        <Emoji name="clock1"/> 
      </header>
    </div>
  );
}

export default App;
