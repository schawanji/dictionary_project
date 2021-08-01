import { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState();
  const [results, setResults] = useState();

  function searchWord(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(searchWord);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter word"
          onChange={updateKeyword}
        />
        <input type="submit" value="search" />
      </form>
      <Results results={results} />
    </div>
  );
}
