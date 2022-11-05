import { useCats } from '../../hooks/useCats';
import { usePicnicCats } from '../../hooks/usePicnicCats';
import CatList from '../cats/CatList';
import PicnicCatList from '../cats/PicnicCatList';

const Home = () => {
  const { cats } = useCats();
  const { picnicCats, addPicnicCat, picnicCatCount } = usePicnicCats();

  return (
    <div>
      {picnicCatCount < 3 ? (
        <CatList cats={cats} addPicnicCat={addPicnicCat} />
      ) : (
        <PicnicCatList picnicCats={picnicCats} />
      )}
    </div>
  );
};

export default Home;
