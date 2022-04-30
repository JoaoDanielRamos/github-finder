import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import Spinner from '../components/global/Spinner/Spinner';
import UserReposList from '../components/users/UserReposList';
import { getUserAndRepos } from '../context/github/GithubActions';

export default function User() {
  const { user, loading, userRepos, dispatch } = useContext(GithubContext);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const params: any = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const fetchUserData = async () => {
      try {
        const userData = await getUserAndRepos(params.login);
        const [userInfo, userRepos] = userData;

        dispatch({ type: 'GET_USER', payload: userInfo });
        dispatch({ type: 'GET_USER_REPOS', payload: userRepos });
      } catch (error) {
        throw new Error();
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className='w-full mx-auto lg:w-10/12'>
          {/* Button */}
          <div className='mb-4'>
            <Link to='/' className='btn btn-ghost'>
              Back to search
            </Link>
          </div>

          {/* Profile Picture */}
          <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
            <div className='custom-card-image mb-6 md:mb-0'>
              <div className='rounded-lg shadow-xl card image-full'>
                <figure>
                  <img src={avatar_url} alt='' />
                </figure>
                <div className='card-body justify-end'>
                  <h2 className='card-title mb-0'>{name}</h2>
                  <p className='flex-grow-0'>{login}</p>
                </div>
              </div>
            </div>

            {/* Profile Description */}
            <div className='col-span-2'>
              <div className='mb-6'>
                <h1 className='text-3xl card-title'>
                  {name}
                  <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                  {hireable && (
                    <div className='mx-1 badge badge-info'>Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className='mt-4 card-actions'>
                  <a
                    href={html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-outline'
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>

              <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
                {location && (
                  <div className='stat'>
                    <div className='stat-title text-md'>
                      {' '}
                      Location
                      <div className='text-lg stat-value'>{location}</div>
                    </div>
                  </div>
                )}
                {blog && (
                  <div className='stat'>
                    <div className='stat-title text-md'>
                      {' '}
                      Website
                      <div className='text-lg stat-value'>
                        <a
                          href={`https://${blog}`}
                          target={'_blank'}
                          rel='noreferrer'
                        >
                          {blog}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className='stat'>
                    <div className='stat-title text-md'>
                      {' '}
                      Twitter
                      <div className='text-lg stat-value'>
                        <a
                          href={`https://twitter.com/${twitter_username}`}
                          target={'_blank'}
                          rel='noreferrer'
                        >
                          {blog}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Stats */}
          <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='stat'>
              <div className='stat-figure text-teal-500'>
                <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {followers}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-teal-500'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {following}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-teal-500'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_repos}
              </div>
            </div>
            <div className='stat'>
              <div className='stat-figure text-teal-500'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_gists}
              </div>
            </div>
          </div>

          <UserReposList repos={userRepos} />
        </div>
      </>
    );
  }
}
