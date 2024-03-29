import React from "react";
import Meanings from "./Meanings";

export default function DefinitionResults(props) {
  // if we have results, display results, else don't display anything//
  if (props.results) {
    console.log(props.results);
    return (
      <div className="DefinitionResults">
        {/*to display the word that was searched */}
        <div className="wordDisplay">{props.results.word}</div>
        <div className="phoneticDisplay">{props.results.phonetic}</div>

        {/*to display the first definition of the word */}
        {/*create a map to loop through all the definitions*/}
        <div className="definitionDisplay">
          {props.results.meanings.map(function (meanings, index) {
            return (
              <div className="holdingMeaning" key={index}>
                <Meanings meanings={meanings} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
