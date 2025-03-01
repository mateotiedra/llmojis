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
        <p className='body1'>Play around the meaning of emojis combinations</p>
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
        <div className='flex flex-row flex-wrap justify-center gap-x-8 gap-y-6'>
          <DetailedButton
            emoji='👥'
            title='Private Room'
            description='Play with friends by sharing an invite link'
            to='room'
          />
          <DetailedButton
            emoji='🌐'
            title='Online'
            description='Play against other players online'
            to='ai'
            disabled
          />
          <DetailedButton
            emoji='🤖'
            title='Against AI'
            description='Play against the computer'
            to='ai'
            disabled
          />
        </div>
      </div>
    );
};

export default Home;
