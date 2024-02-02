import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    //[0] b/c stored as an array and we only want first definition (not with this api)
    console.log(response.data);
  }
  //build api axios in search b/c when searching we want to make the axios call
  function search(event) {
    event.preventDefault();
    alert(`searching for ${word}`);

    let apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
