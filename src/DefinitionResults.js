import React from "react";

export default function DefinitionResults(props) {
  console.log(props.results);
  // if we have results, display results, else don't display anything//
  if (props.results) {
    return (
      <div className="DefinitionResults">
        {/*to display the word that was searched */}
        <div className="wordDisplay"> {props.results.word}</div>
        {/*to display the first definition of the word */}
        <div className="definitionDisplay">
          {props.results.meanings[0].definition}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
