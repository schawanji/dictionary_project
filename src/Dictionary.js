import { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("love");
  const [results, setResults] = useState(null);
  const [response, setResponse] = useState(false);

  function searchWord(response) {
    setResults(response.data[0]);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(searchWord);
    setResponse(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  if (response) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Love" onChange={updateKeyword} />
          <input type="submit" value="search" />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
