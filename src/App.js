import React from 'react';
import './App.css';
import Emoji from './components/Emoji';


function App() {
  return (
    <div className="App">
        <div className="emoji-container">
          <Emoji name="smiley" size="20"/>
          <Emoji name="monkey_face" size="40"/>
          <Emoji name="wink" size="60"/>
          <Emoji name="rolling_on_the_floor_laughing" size="80"/>
          <Emoji name="thinking_face" size="100"/>
        </div>
        <div className="emoji-container">
          <Emoji name="flag-ac" size="20"/>
          <Emoji name="flag-ad" size="40"/>
          <Emoji name="flag-ae" size="60"/>
          <Emoji name="flag-ci" size="80"/>
          <Emoji name="flag-pk" size="100"/>
        </div>
        <div className="emoji-container">
          <Emoji name="secret" size="20"/>
          <Emoji name="heavy_heart_exclamation_mark_ornament" size="40"/>
          <Emoji name="grey_question" size="60"/>
          <Emoji name="mosque" size="80"/>
          <Emoji name="children_crossing" size="100"/>
        </div>
        <div className="emoji-container">
          <Emoji name="blue_heart" size="20"/>
          <Emoji name="green_heart" size="40"/>
          <Emoji name="purple_heart" size="60"/>
          <Emoji name="yellow_heart" size="80"/>
          <Emoji name="black_heart" size="100"/>
        </div>
    </div>
  );
}

export default App;
