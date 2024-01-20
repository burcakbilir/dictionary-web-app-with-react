import { createContext, useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    const data = await response.json();

    setResults(data[0]);
  };

  const defaultWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/cat"
    );
    const data = await response.json();
    setResults(data[0]);
  };
  useEffect(() => {
    defaultWord();
  }, []);

  const heading = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "").audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App w-100 min-h-screen" id={theme}>
          <div className="container mx-auto p-10  ">
            <nav className=" flex flex-row items-center justify-between ">
              <h2 className="text-slate-400 text-2xl">
                <img src="./book.png" alt="" />
              </h2>
              <div className="flex flex-row items-center  ">
                <div className="switch">
                  <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                    onColor="#f472b6"
                    onHandleColor="#ffffff"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={20}
                    width={40}
                  />
                  <i
                    class="fa-regular fa-moon ml-2"
                    style={{ color: `#f472b6` }}
                  ></i>
                </div>
              </div>
            </nav>
            <div className="flex items-center my-6">
              <input
                type="text"
                className="w-full bg-slate-50 border-none outline-none rounded-lg px-3 py-2 dark-mode-input"
                placeholder="Search for any word..."
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <button
                className="-mx-10  px-3 py-2 rounded-lg text-white"
                onClick={searchWord}
              >
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: `#f472b6` }}
                ></i>
              </button>
            </div>

            {results?.meanings?.length > 0 && (
              <>
                <Heading {...heading()} />
                {results.meanings.map((content, index) => {
                  return <Content {...content} key={index} />;
                })}
              </>
            )}
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
