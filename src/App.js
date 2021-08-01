import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Look up a word</header>

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
