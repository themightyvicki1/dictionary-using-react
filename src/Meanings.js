import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3 className="partOfSpeech">{props.meanings.partOfSpeech}</h3>

      <p className="definitionDisplay">
        defined as: {props.meanings.definition}
      </p>
      <p className="exampleDisplay">
        <em> {props.meanings.example}</em>
      </p>

      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
