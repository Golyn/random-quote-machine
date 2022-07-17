import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTumblr, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch quote
  const getData = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuotes(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <div className="card d-flex align-items-center justify-content-center">
      {loading && <h2>Loading quote...</h2>}
      {quotes && (
        <div id="quote-box" className="text-center">
          <div className="quote-content mb-5">
            <div id="text" className="mb-5">
              <h2>{quotes.content} </h2>
            </div>
            <div id="author" className="d-flex justify-content-end me-3 mb-5">
              - {quotes.author}
            </div>
          </div>
          <div className="btn d-flex ">
            {' '}
            <Button className="me-2">
              <Link
                to={`twitter.com/intent/tweet`}
                target="_blank"
                id="#tweet-quote"
                className="text-white"
              >
                <FaTwitter />
              </Link>
            </Button>
            <Button>
              <Link
                to={'twitter.com/intent/tweet'}
                target="_blank"
                id="#tweet-quote"
                className="text-white"
              >
                <FaTumblr />
              </Link>
            </Button>
            <Button id="new-quote" className="ms-auto" onClick={getData}>
              New Quote
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
