import PicnicCat from './PicnicCat';

const PicnicCatList = ({ picnicCats }) => {
  return (
    <ul>
      {picnicCats.map((picnicCat) => (
        <li key={picnicCat}>
          <PicnicCat url={picnicCat} />
        </li>
      ))}
    </ul>
  );
};

export default PicnicCatList;
