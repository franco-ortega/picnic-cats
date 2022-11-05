import PicnicCat from './PicnicCat';
import styles from './PicnicCatList.module.scss';

const PicnicCatList = ({ picnicCats, setPicnicCats, resetCats }) => {
  const onPlayAgainClick = () => {
    resetCats();
    setPicnicCats([]);
  };

  return (
    <div className={styles.PicnicCatList}>
      <h2>Picnic Crew</h2>
      <ul>
        {picnicCats.map((picnicCat, i) => (
          <PicnicCat key={picnicCat} url={picnicCat} index={i} />
        ))}
      </ul>

      <button onClick={onPlayAgainClick}>Play Again</button>
    </div>
  );
};

export default PicnicCatList;
