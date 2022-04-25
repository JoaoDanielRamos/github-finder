import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../global/Spinner/Spinner';

export default function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GITHUB_URL}/users`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      );
      const data = await response.data;

      setUsers(data);
      setLoading(false);
    } catch (error) {
      throw new Error();
    }
  };

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user: { login: string }, key) => (
          <h3 key={key}>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}
