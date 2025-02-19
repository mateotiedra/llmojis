import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import SubmitField from '../components/SubmitField';

const Guesser = () => {
  const [emojis, setEmojis] = useState([]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // Fetch initial set of emojis when the component loads
    axios
      .get('https://api.example.com/emojis')
      .then((res) => {
        setEmojis(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger API call when user submits a word
    axios
      .post('https://api.example.com/submit', { word: input })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='section-container flex-centered w-full'>
      <Navbar pageName='Guesser' />
      <div>
        {emojis.map((emoji, index) => (
          <span key={index} style={{ fontSize: '2rem', margin: '0.5rem' }}>
            {emoji}
          </span>
        ))}
      </div>
      <SubmitField handleSubmit={handleSubmit} onChange={setInput} />
      {response && <div>{response.message}</div>}
    </div>
  );
};

export default Guesser;
