import { useCats } from '../../hooks/useCats';

const Home = () => {
  const { cats } = useCats();

  console.log(cats);
  return <div>Home</div>;
};

export default Home;
