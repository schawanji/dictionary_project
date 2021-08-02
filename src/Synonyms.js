import "./Synonyms.css";
export default function Synonym(props) {
  let synonyms = props.synonym;
  if (props.synonym) {
    return (
      <div className="Synonym">
        <strong>Synonyms</strong>
        {synonyms.map(function (synonym, index) {
          return (
            <ul key={index}>
              <li className="synonym">{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return ``;
  }
}
