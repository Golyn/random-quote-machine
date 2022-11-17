// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { FaTwitter, FaQuoteLeft, FaTumblr } from 'react-icons/fa';
import { useState, useEffect } from 'react';
// import randomColor from 'randomcolor';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [bgColor, setColor] = useState('');

  // Fetch quote
  const getData = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuotes(data);
    // setLoading(false);
  };

  const colors = [
    '#16a085',
    // '#27ae60',
    // '#2c3e50',
    // '#f39c12',
    '#e74c3c',
    // '#9b59b6',
    // '#FB6964',
    // '#342224',
    // '#472E32',
    // '#BDBB99',
    // '#77B1A9',
    // '#73A857',
  ];

  const changeColor = (e) => {
    // let random = randomColor();
    let randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  const handleClick = (e) => {
    getData();
    changeColor();
  };

  useEffect(() => {
    // setLoading(true);
    getData();
  }, []);

  return (
    <div
      className="App d-flex align-items-center justify-content-center flex-fill"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Card
        className="p-5"
        style={{
          color: bgColor,
          width: '45%',
        }}
      >
        {/* {loading && <h2>Loading quote...</h2>} */}
        {quotes ? (
          <Card.Body>
            <blockquote className="h3">
              <p>
                <FaQuoteLeft className="pe-2 pb-2 mb-2 " />
                {quotes.content}
              </p>
              <footer
                className="blockquote-footer d-flex justify-content-end mt-5 display-5"
                style={{
                  color: bgColor,
                }}
              >
                {quotes.author}
              </footer>
            </blockquote>
            <div className="d-flex mt-4">
              <Button
                variant="primary"
                style={{
                  backgroundColor: bgColor,
                  border: 'none',
                  outline: 'none',
                  marginRight: '10px',
                  boxShadow: 'none',
                }}
              >
                <a
                  href={`https://twitter.com/intent/tweet?text=“${quotes.content}” ${quotes.author}&hashtags=quotes,freecodecamp`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter color="white" backgroundColor="black" />
                </a>
              </Button>
              <Button
                variant="primary"
                className=""
                style={{
                  backgroundColor: bgColor,
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
              >
                <a
                  href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption= +
                ${quotes.author} +
                  &content= +
                 ${quotes.content}+
                  &canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTumblr color="white" backgroundColor="black" />
                </a>
              </Button>
              <Button
                variant="primary"
                className="ms-auto"
                style={{
                  backgroundColor: bgColor,
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                onClick={handleClick}
              >
                New Quote
              </Button>
            </div>
          </Card.Body>
        ) : (
          <h2>Loading quote...</h2>
        )}
      </Card>
    </div>
  );
};

export default Home;
