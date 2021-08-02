import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Dictionary />

      <footer>
        {" "}
        <a href="https://github.com/schawanji/dictionary_project">
          Open-source project{" "}
        </a>{" "}
        hosted on{" "}
        <a href="https://schawanji-dictionaryapp.netlify.app/"> Netlify</a>{" "}
        Coded by{" "}
        <a href="https://www.linkedin.com/in/schawanji/">Sharon Chawanji</a>
      </footer>
    </div>
  );
}

export default App;
