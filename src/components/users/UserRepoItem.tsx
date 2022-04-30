import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from 'react-icons/fa';

export default function UserRepoItem({
  repo,
}: {
  repo: {
    name: string;
    description: string;
    html_url: string;
    open_issues: number;
    watchers_count: number;
    stargazers_count: number;
    forks: number;
  };
}) {
  const {
    name,
    description,
    html_url,
    open_issues,
    watchers_count,
    stargazers_count,
    forks,
  } = repo;
  return (
    <div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='mr-2 badge badge-success badge-lg'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='mr-2 badge badge-warning badge-lg'>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}
