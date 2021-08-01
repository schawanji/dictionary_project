import "./Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props);
    return (
      <div>
        <h1>{props.results.word} </h1>
        {props.results.meanings.map(function (definition, index) {
          return (
            <ul>
              <li key={index}>{definition.definitions[0].definition}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
}
