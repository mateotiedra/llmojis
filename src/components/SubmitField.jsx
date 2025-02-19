import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa6';

const SubmitField = ({ handleSubmit, onChange }) => {
  return (
    <form
      className='rounded-2xl border py-4 px-5 w-full max-w-md flex flex-row'
      onSubmit={handleSubmit}
    >
      <input
        className='outline-none flex-grow'
        type='text'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Guess the concept'
      />
      <button className='p-2 hover:cursor-pointer' type='submit'>
        <FaArrowUp />
      </button>
    </form>
  );
};

SubmitField.propTypes = {
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default SubmitField;
