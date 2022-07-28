import React, { useState } from "react";
import "./styles.css";

var headingcolor = "Purple";

var fruits = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "PineApple",
  "🍎": "Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var textcolor = "white";
var bgcolor = "purple";

var emojisWeKnow = Object.keys(fruits);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = fruits[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our databse";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = fruits[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1
        style={{ padding: "20px", color: textcolor, backgroundColor: bgcolor }}
      >
        Input Out!
      </h1>
      <input
        style={{ width: "400px", height: "30px" }}
        onChange={onChangeHandler}
      ></input>
      <h2>{meaning}</h2>

      <h2 style={{ color: "purple" }}>Emojis We Know</h2>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "50px",

              width: "300px",
              display: "inline-block",
              margin: "auto"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
