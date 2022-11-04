import { useCats } from '../../hooks/useCats';
import CatList from '../cats/CatList';

const Home = () => {
  const { cats } = useCats();

  console.log(cats);
  return (
    <div>
      <CatList cats={cats} />
    </div>
  );
};

export default Home;
