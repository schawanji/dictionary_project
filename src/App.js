import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Look up a word</h1>

      <Dictionary />

      <footer>
        {" "}
        <a href="https://github.com/schawanji/dictionary_project">
          Open-source project{" "}
        </a>{" "}
        hosted on{" "}
        <a href="https://schawanji-dictionaryapp.netlify.app/"> Netlify</a>{" "}
        Coded by Sharon Chawanji
      </footer>
    </div>
  );
}

export default App;
