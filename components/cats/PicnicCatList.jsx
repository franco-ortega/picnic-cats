import PicnicCat from './PicnicCat';
import styles from './PicnicCatList.module.scss';

const PicnicCatList = ({ picnicCats }) => {
  return (
    <div className={styles.PicnicCatList}>
      <h2>Selected Cats</h2>
      <ul>
        {picnicCats.map((picnicCat, i) => (
          <li key={picnicCat}>
            <PicnicCat url={picnicCat} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PicnicCatList;
