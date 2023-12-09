
import './App.css';

import Dictionary from './Dictionary';
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary  />
        </main>
        <footer className="App-footer">
          This project was coded by Roya Almasimehr and is{" "}
          <a href="https://github.com/RoyaAlmasimehr/dictionary-project">
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://dictionary-project200.netlify.app/">
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}


