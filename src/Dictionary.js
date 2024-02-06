import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DefinitionResults from "./DefinitionResults";

export default function Dictionary() {
  let [word, setWord] = useState("");
  // state goal = to track state of current definition, store definition of word that is typed//
  // null so null by default
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //[0] b/c stored as an array and we only want first definition (not with this api)
    //console.log(response.data);
    //showing the first defintion, if you change [1] it'll show second definition etc//
    //console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  //build api axios in search b/c when searching we want to make the axios call
  function search(event) {
    event.preventDefault();
    //alert(`searching for ${word}`);

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
        <span className="col-9">
          <input
            type="search"
            placeholder="Search for word..."
            autoFocus={true}
            onChange={handleWordChange}
            id="search-bar"
            autoComplete={false}
          ></input>
        </span>
        <span className="col-3">
          <input
            type="submit"
            value="Enter"
            className="btn btn-primary"
          ></input>
        </span>
      </form>
      {/*send definition results to this component to be displayed and styled*/}
      {/*component name, property name, property value which is the state set above*/}
      <DefinitionResults results={results} />
      {/*every time the state changes the whole component is rerendered, rerun, with new data*/}
      {/*it reacts when a state is changed, rerendered */}
    </div>
  );
}
