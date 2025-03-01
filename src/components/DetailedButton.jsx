import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

const DetailedButton = ({
  emoji,
  title,
  description,
  onClick,
  to,
  disabled,
}) => {
  console.log(
    `border rounded-md text-center items-stretch ${
      disabled ? '' : ' fly-hover'
    }`
  );

  const insideButton = (
    <div className='h-full w-full p-2 md:p-4'>
      <p className='!text-3xl m-4'>{emoji}</p>
      <p className='font-bold text-lg mt-2'>{title}</p>
      <p className='!text-sm text-gray-600 my-1 max-w-40'>{description}</p>
    </div>
  );

  return (
    <button
      className={`border rounded-md text-center items-stretch ${
        disabled ? ' opacity-55' : ' fly-hover'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? insideButton : <HashLink to={to}>{insideButton}</HashLink>}
    </button>
  );
};

DetailedButton.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default DetailedButton;
