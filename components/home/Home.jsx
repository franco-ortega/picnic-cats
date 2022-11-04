import { useState } from 'react';
import { useCats } from '../../hooks/useCats';
import CatList from '../cats/CatList';
import PicnicCatList from '../cats/PicnicCatList';

const Home = () => {
  const { cats } = useCats();
  const [picnicCats, setPicnicCats] = useState([]);

  const addPicnicCat = (cat) => {
    setPicnicCats((prevState) => {
      return [...prevState, cat];
    });
  };

  return (
    <div>
      <CatList cats={cats} addPicnicCat={addPicnicCat} />
      <PicnicCatList picnicCats={picnicCats} />
    </div>
  );
};

export default Home;
