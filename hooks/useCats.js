import { useEffect, useState } from 'react';
import { getCats } from '../services/cats';

export const useCats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    if (cats.length === 0) {
      getCats().then((res) => setCats(res));
    }
  }, [cats]);

  return { cats };
};
