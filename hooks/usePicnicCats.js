import { useState } from 'react';

export const usePicnicCats = () => {
  const [picnicCats, setPicnicCats] = useState([]);

  const addPicnicCat = (cat) => {
    setPicnicCats((prevState) => {
      return [...prevState, cat];
    });
  };

  const picnicCatCount = picnicCats.length;

  const resetPicnicCats = () => setPicnicCats([]);

  return { picnicCats, addPicnicCat, picnicCatCount, resetPicnicCats };
};
