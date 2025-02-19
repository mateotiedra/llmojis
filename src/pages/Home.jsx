import { useCallback, useState } from 'react';
import DetailedButton from '../components/DetailedButton';

const Home = () => {
  const [pageState, setPageState] = useState('hello');

  const chooseGameMode = useCallback(() => {
    setPageState('gameMode');
  }, []);

  if (pageState === 'hello')
    return (
      <div className='section-container flex-centered'>
        <header className='text-4xl font-bold my-4'>Welcome to LLMojis</header>
        <p className='text-lg text-gray-600'>
          Play around the meaning of emojis comnbinations
        </p>
        <button onClick={chooseGameMode}>Get Started</button>
      </div>
    );
  else
    return (
      <div className='section-container flex-centered'>
        <header className='text-4xl font-bold text-gray-800 my-4 text-center'>
          Choose a game mode
        </header>
        <div className='flex flex-row gap-8'>
          <DetailedButton
            emoji='🤔'
            title='Guesser'
            description='Guess the concept based on the given set of emojis'
          />
          <DetailedButton
            emoji='🔍'
            title='Concepter'
            description='Challenge the computer to guess by providing a set of emojis'
          />
        </div>
      </div>
    );
};

export default Home;
