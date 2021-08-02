import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <header>Dictionary</header>
      <Dictionary />

      <footer>
        {" "}
        <a href="https://github.com/schawanji/dictionary_project" target="_blank" rel="noreferrer">
          Open-source project{" "}
        </a>{" "}
        hosted on{" "}
        <a href="https://schawanji-dictionaryapp.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a>{" "}
        Coded by{" "}
        <a href="https://www.linkedin.com/in/schawanji/" target="_blank" rel="noreferrer">Sharon Chawanji</a>
      </footer>
    </div>
  );
}

export default App;
