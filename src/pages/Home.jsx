import { useCallback, useState } from 'react';

import DetailedButton from '../components/DetailedButton';
import Navbar from '../components/Navbar';

const Home = () => {
  const [pageState, setPageState] = useState('hello');

  const chooseGameMode = useCallback(() => {
    setPageState('gameMode');
  }, []);

  if (pageState === 'hello')
    return (
      <div className='h-screen section-container flex-centered'>
        <h1 className='pb'>Welcome to LLMojis</h1>
        <p className='body1'>Play around the meaning of emojis comnbinations</p>
        <button className='text-button fly-hover' onClick={chooseGameMode}>
          Get Started
        </button>
      </div>
    );
  else
    return (
      <div className='h-screen section-container flex-centered'>
        <Navbar pageName='Game Mode' />
        <h1 className='pb'>Choose a game mode</h1>
        <div className='flex flex-row gap-8'>
          <DetailedButton
            emoji='🤔'
            title='Guesser'
            description='Guess the concept based on the given set of emojis'
            to='guesser'
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
