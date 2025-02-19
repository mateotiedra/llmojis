import PropTypes from 'prop-types';
import { FaHouse } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ pageName }) => {
  return (
    <nav className='flex-centered w-full absolute top-0 left-0 border-b-1 border-b-gray-300'>
      <div className='flex flex-row justify-start w-full max-w-4xl relative my-4'>
        <HashLink
          className='text-2xl hover:cursor-pointer flex-centered p-2'
          to='/'
        >
          <FaHouse />
        </HashLink>
        <h1 className='text-xl absolute translate-x-[-50%] top-0 left-[50%]'>
          {pageName}
        </h1>
        <h1 className='!text-gray-100 text-xl'>{pageName}</h1>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Navbar;
