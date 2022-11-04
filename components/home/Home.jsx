import { useCats } from '../../hooks/useCats';
import { usePicnicCats } from '../../hooks/usePicnicCats';
import CatList from '../cats/CatList';
import PicnicCatList from '../cats/PicnicCatList';

const Home = () => {
  const { cats } = useCats();
  const { picnicCats, addPicnicCat, picnicCatCount } = usePicnicCats();

  return (
    <div>
      <CatList
        cats={cats}
        addPicnicCat={addPicnicCat}
        picnicCatCount={picnicCatCount}
      />
      <PicnicCatList picnicCats={picnicCats} />
    </div>
  );
};

export default Home;
