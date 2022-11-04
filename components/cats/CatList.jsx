import Cat from './Cat';
import styles from './CatList.module.scss';

const CatList = ({ cats, addPicnicCat, picnicCatCount }) => {
  return (
    <div className={styles.CatList}>
      <h2>Kitty Contenders</h2>
      <ul>
        {picnicCatCount < 3 &&
          cats.map((cat) => (
            <li key={cat.id}>
              <Cat {...cat} addPicnicCat={addPicnicCat} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CatList;
