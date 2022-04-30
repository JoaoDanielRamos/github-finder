import UserRepoItem from './UserRepoItem';

export default function UserReposList({
  repos,
}: {
  repos: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    open_issues: number;
    watchers_count: number;
    stargazers_count: number;
    forks: number;
  }[];
}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latests Repositories
        </h2>
        {repos.map(repo => (
          <UserRepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
