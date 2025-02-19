import PropTypes from 'prop-types';

const DetailedButton = ({ emoji, title, description }) => {
  return (
    <button className='border p-4 rounded-md text-center items-stretch'>
      <div className='text-3xl m-4'>{emoji}</div>
      <div className='font-bold text-lg mt-2'>{title}</div>
      <div className='text-sm text-gray-600 my-1 max-w-40'>{description}</div>
    </button>
  );
};

DetailedButton.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DetailedButton;
