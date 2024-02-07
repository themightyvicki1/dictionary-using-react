import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DefinitionResults from "./DefinitionResults";
import Photos from "./Photos";

//accepting props to access defaultWord from App component //
export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  // state goal = to track state of current definition, store definition of word that is typed//
  // null so null by default
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionary(response) {
    //[0] b/c stored as an array and we only want first definition (not with this api)
    //console.log(response.data);
    //showing the first defintion, if you change [1] it'll show second definition etc//
    //console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    //alert(`searching for ${word}`);

    let apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionary);

    //creating api for pictures
    const pexelsApiKey = `NaGQDyK82WUlaGzbKFRWYtgGDFvZNnEBEpSajlhzaJcpZrv2pIWO1dyX`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
    //used to authenticate api for images
    let headers = {
      "Content-Type": "application/json",
      Authorization: pexelsApiKey,
    };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  //build api axios in search b/c when searching we want to make the axios call
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="searchBar" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for word..."
                autoFocus={true}
                onChange={handleWordChange}
                id="search-bar"
                className="form-control"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Enter"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <div className="suggestions">
          suggestions: sunset, cartoon, library, orange...
        </div>
        {/*send definition results to this component to be displayed and styled*/}
        {/*component name, property name, property value which is the state set above*/}
        <DefinitionResults results={results} />
        {/*every time the state changes the whole component is rerendered, rerun, with new data*/}
        {/*it reacts when a state is changed, rerendered */}
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
