// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import randomColor from 'randomcolor';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bgColor, setColor] = useState('');

  // Fetch quote
  const getData = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuotes(data);
    setLoading(false);
  };

  const changeColor = (e) => {
    let random = randomColor();
    setColor(random);
  };

  const handleClick = (e) => {
    getData();
    changeColor();
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <div
      className="App d-flex align-items-center justify-content-center flex-fill"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="card d-flex align-items-center p-5 overflow-auto ">
        {loading && <h2>Loading quote...</h2>}
        {quotes && (
          <div>
            <div
              id="quote-box"
              className="text-center"
              style={{
                color: bgColor,
              }}
            >
              <div className="quote-content mb-5">
                <div id="text" className="mb-5">
                  <h2>“{quotes.content}” </h2>
                </div>
                <div
                  id="author"
                  className="d-flex justify-content-end me-3 mb-5"
                >
                  - {quotes.author}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between ">
              <button
                className="me-2 btn d-flex align-self-end"
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <a
                  href={`https://twitter.com/intent/tweet?text=“${quotes.content}” ${quotes.author}&hashtags=quotes`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter color="white" />
                </a>
              </button>
              <button
                id="new-quote"
                className="d-flex align-self-end"
                style={{
                  backgroundColor: bgColor,
                  padding: '4px 8px',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                }}
                onClick={handleClick}
              >
                New Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
