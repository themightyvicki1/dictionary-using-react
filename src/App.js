import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <p>Dictionary 📖</p>
      <div className="container">
        <header>What word do you want to look up?</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/themightyvicki1/dictionary-using-react"
            title="https://github.com/themightyvicki1/dictionary-using-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source coded by
          </a>{" "}
          Victoria Greer
        </footer>
      </div>
    </div>
  );
}

export default App;
