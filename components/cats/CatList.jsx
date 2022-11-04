import Cat from './Cat';
import styles from './CatList.module.scss';

const CatList = ({ cats }) => {
  return (
    <ul className={styles.CatList}>
      {cats.map((cat) => (
        <li key={cat.id}>
          <Cat url={cat.url} />
        </li>
      ))}
    </ul>
  );
};

export default CatList;
