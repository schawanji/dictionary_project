import { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("love");
  const [results, setResults] = useState(null);
  const [response, setResponse] = useState(false);
  const [photos, setPhoto] = useState(null);

  function searchWord(response) {
    setResults(response.data[0]);
  }
  function getImages(response) {
    setPhoto(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(searchWord);

    const token = `563492ad6f91700001000001561be5eb99b84e6192bd8462212aff9c`;
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then(getImages);
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
        <section>
          <form onSubmit={handleSubmit}>
            <label>Look up a word</label>
            <input type="search" placeholder="Love" onChange={updateKeyword} />
          </form>
          <small className="hint">e.g sunset, fire, map, environment</small>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
    return "Loading photos..............";
  }
}
