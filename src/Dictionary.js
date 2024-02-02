import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for word..."
          autoFocus={true}
          onChange={handleWordChange}
        ></input>
        <input type="submit" value="Enter"></input>
      </form>
    </div>
  );
}
