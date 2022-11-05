import PicnicCat from './PicnicCat';
import styles from './PicnicCatList.module.scss';

const PicnicCatList = ({ picnicCats, resetPicnicCats, resetCats }) => {
  const onPlayAgainClick = () => {
    resetCats();
    resetPicnicCats();
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
