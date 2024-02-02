import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary App using React</header>
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
