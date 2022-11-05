import { useCats } from '../../hooks/useCats';
import { usePicnicCats } from '../../hooks/usePicnicCats';
import CatList from '../cats/CatList';
import PicnicCatList from '../cats/PicnicCatList';
import Loading from '../loading/Loading';

const Home = () => {
  const { cats, loading, resetCats } = useCats();
  const { picnicCats, addPicnicCat, picnicCatCount, setPicnicCats } =
    usePicnicCats();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : picnicCatCount < 3 ? (
        <CatList
          cats={cats}
          addPicnicCat={addPicnicCat}
          picnicCatCount={picnicCatCount}
        />
      ) : (
        <PicnicCatList
          picnicCats={picnicCats}
          setPicnicCats={setPicnicCats}
          resetCats={resetCats}
        />
      )}
    </div>
  );
};

export default Home;
