import React, { useState, useEffect } from "react";
import "./App.scss";
import { FaTwitter } from "react-icons/fa";

function App() {
  const [currentQuote, setCurrentQuote] = useState({
    quote: "we become what we think about",
    author: "Earl Nightingale",
  });
  const [quotesArray, setQuotesArray] = useState([]);
  const [colorTheme, setColorTheme] = useState("#4c0005");

  const quotesUrl =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const colorsArr = [
    "#4FC1FF",
    "#E8B9AB",
    "#CB769E",
    "#69995D",
    "#D2D7DF",
    "#3AA7A3",
    "#ECA400",
    "#006992",
    "#AFECE7",
    "#81F499",
    "3890620",
    "#B6465F",
    "#8ACDEA",
  ];

  useEffect(() => {
    const fetchQuotes = async (url) => {
      const response = await fetch(url);
      const parsedJSON = await response.json();
      setQuotesArray(parsedJSON.quotes);
    };
    fetchQuotes(quotesUrl);
  }, [quotesUrl]);

  const handleChange = () => {
    setCurrentQuote(
      quotesArray[Math.floor(Math.random() * quotesArray.length)]
    );
    setColorTheme(colorsArr[Math.floor(Math.random() * colorsArr.length)]);
    console.log(colorTheme);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: colorTheme }}>
        <div id="quote-box" style={{ color: colorTheme }}>
          <p id="text">"{currentQuote.quote}"</p>
          <p id="author">- {currentQuote.author}</p>

          <div className="buttons">
            <a
              id="tweet-quote"
              href={encodeURI(
                `https://twitter.com/intent/tweet?text=${currentQuote.quote} -${currentQuote.author}`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <button
              id="new-quote"
              onClick={handleChange}
              style={{ backgroundColor: colorTheme }}
            >
              New Quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
