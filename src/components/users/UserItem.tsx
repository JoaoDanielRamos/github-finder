import { Link } from 'react-router-dom';

export default function UserItem({
  user: { login, avatar_url },
}: {
  user: { login: string; avatar_url: string; id: number };
}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='user avatar' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title mb-1'>{login}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
