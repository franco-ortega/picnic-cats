import Cat from './Cat';
import styles from './CatList.module.scss';

const CatList = ({ cats, addPicnicCat }) => {
  return (
    <ul className={styles.CatList}>
      {cats.map((cat) => (
        <li key={cat.id}>
          <Cat {...cat} addPicnicCat={addPicnicCat} />
        </li>
      ))}
    </ul>
  );
};

export default CatList;
