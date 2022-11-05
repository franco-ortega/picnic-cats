import PicnicCat from './PicnicCat';
import styles from './PicnicCatList.module.scss';

const PicnicCatList = ({ picnicCats, setCats, setPicnicCats }) => {
  console.log(setCats);
  const onPlayAgainClick = () => {
    setCats([]);
    setPicnicCats([]);
  };

  return (
    <div className={styles.PicnicCatList}>
      <h2>Picnic Crew</h2>
      <ul>
        {picnicCats.map((picnicCat, i) => (
          <li key={picnicCat}>
            <PicnicCat url={picnicCat} index={i} />
          </li>
        ))}
      </ul>

      <button onClick={onPlayAgainClick}>Play Again</button>
    </div>
  );
};

export default PicnicCatList;
