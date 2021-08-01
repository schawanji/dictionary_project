export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div>
        {" "}
        <div>{props.results.word} </div>
        <div> {props.results.word}</div>
      </div>
    );
  } else {
    return "No results yet";
  }
}
