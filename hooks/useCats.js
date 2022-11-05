import { useEffect, useState } from 'react';
import { getCats } from '../services/cats';

export const useCats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cats.length === 0) {
      getCats().then((res) => {
        setCats(res);
        setLoading(false);
      });
    }
  }, [cats]);

  const resetCats = () => {
    setCats([]);
    setLoading(true);
  };

  return { cats, loading, resetCats };
};
