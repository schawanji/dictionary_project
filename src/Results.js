export default function Results(props) {
  if (props.results) {
    console.log(props);
    return (
      <div>
        <div>{props.results.word} </div>
        {props.results.meanings.map(function (definition, index) {
          console.log(definition.definitions[0].definition);
          return <div key={index}>{definition.definitions[0].definition}</div>;
        })}
      </div>
    );
  } else {
    return "No results yet";
  }
}
