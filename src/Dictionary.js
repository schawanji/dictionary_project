import { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState();
  function handleSubmit(event) {
    event.preventDefault();
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

      {keyword}
    </div>
  );
}
