import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary ReactJS Application</header>

      <Dictionary />
      

      <footer>
        {" "}
        Hosted on{" "}
        <a href="https://schawanji-dictionaryapp.netlify.app/"> Netlify</a>{" "}
        Coded by Sharon Chawanji
      </footer>
    </div>
  );
}

export default App;
