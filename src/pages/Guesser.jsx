import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SubmitField from '../components/SubmitField';

const Guesser = () => {
  const [emojis, setEmojis] = useState('');
  const [input, setInput] = useState('');
  const [triedWords, setTriedWords] = useState([]);
  const [success, setSuccess] = useState([]);

  // Fetch initial set of emojis when the component loads
  useEffect(() => {
    /* axios
      .get('https://api.example.com/emojis')
      .then((res) => {
        setEmojis(res.data.emojis);
      })
      .catch((err) => {
        console.error(err);
      }); */

    setEmojis('🦇🃏🏙️🚔');
  }, []);

  // Trigger API call when user submits a word
  const handleSubmit = (e) => {
    e.preventDefault();

    const sanintizedInput = input.trim();
    if (
      !sanintizedInput ||
      !sanintizedInput.length ||
      triedWords.includes(sanintizedInput)
    )
      return;

    if (sanintizedInput === 'batman') {
      setSuccess(true);
      setTriedWords([...triedWords, '🎉 ' + sanintizedInput + ' 🎉']);
    } else {
      setTriedWords([...triedWords, sanintizedInput]);
    }
    setInput('');
    /* axios
      .post('https://api.example.com/submit', {
        word: input,
        count: triedWords.length - 1,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      }); */
  };

  return (
    <>
      <Navbar pageName='Guesser' />
      <div className='pt-[35vh] flex-centered !justify-start w-full min-h-screen'>
        <h1 className='!text-6xl pb-14'>{emojis}</h1>
        <div className='w-full px-8 flex-centered'>
          <SubmitField
            handleSubmit={handleSubmit}
            onChange={setInput}
            inputValue={input}
          />
        </div>
        <div className='mt-4 min-w-[200px] flex flex-col-reverse items-center gap-1 text-gray-500'>
          {triedWords.map((word, index) => (
            <p key={index}>{word}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Guesser;
