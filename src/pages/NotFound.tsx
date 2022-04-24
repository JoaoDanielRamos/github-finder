import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <p className='text-5xl mb-8'>404 - page not found.</p>
          <Link to='/' className='btn btn-primary'>
            <FaHome className='mr-2' />
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
