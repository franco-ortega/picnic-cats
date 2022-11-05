import { useState } from 'react';

export const useMessage = (count) => {
  const [message, setMessage] = useState('');

  if (count === 0) setMessage('Who will select the location?');
  else if (count === 1) setMessage('Who will pick the snacks?');
  else if (count === 2) setMessage('Who will bring the toys?');

  return { message };
};
