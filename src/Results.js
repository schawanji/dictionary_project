import "./Results.css";
import Synonym from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word} </h1>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <a href={phonetic.audio} target="_blank" rel="noreferrer">
                {" "}
                listen
              </a>
              <div>{phonetic.text}</div>
            </div>
          );
        })}
        {props.results.meanings.map(function (definition, index) {
          return (
            <ul key={index}>
              <li>
                {" "}
                <h3>{definition.partOfSpeech}</h3>{" "}
                {definition.definitions[0].definition}{" "}
                <div> Example: {definition.definitions[0].example}</div>{" "}
                <Synonym synonym={definition.definitions[0].synonyms} />{" "}
              </li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
