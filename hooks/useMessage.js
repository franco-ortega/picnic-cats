import { useEffect, useState } from 'react';

export const useMessage = (count) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count === 0) setMessage('will select the location!');
    else if (count === 1) setMessage('will pick the snacks!');
    else if (count === 2) setMessage('will bring the toys!');
  }, [count]);

  return { message };
};
