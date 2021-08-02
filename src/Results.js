import "./Results.css";
import Synonym from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word} </h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index} className="Phonetics">
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  {" "}
                  listen
                </a>
                <span>{phonetic.text}</span>
              </span>
            );
          })}
        </section>

        {props.results.meanings.map(function (definition, index) {
          return (
            <section key={index}>
              {" "}
              <h3>{definition.partOfSpeech}</h3>
              <p>{definition.definitions[0].definition}</p>
              <em> Example: {definition.definitions[0].example}</em>
              <Synonym synonym={definition.definitions[0].synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
