import React from "react";

export default function Meanings(props) {
  console.log(props.meanings.definition);
  return (
    <div className="Meanings">
      <h3 className="partOfSpeech">{props.meanings.partOfSpeech}</h3>

      <p className="definitionDisplay">{props.meanings.definition}</p>
      <p className="exampleDisplay">{props.meanings.example}</p>
    </div>
  );
}
