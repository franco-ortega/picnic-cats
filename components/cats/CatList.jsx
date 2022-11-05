import { useMessage } from '../../hooks/useMessage';
import Cat from './Cat';
import styles from './CatList.module.scss';

const CatList = ({ cats, addPicnicCat, picnicCatCount }) => {
  const { message } = useMessage(picnicCatCount);
  return (
    <div className={styles.CatList}>
      <h2>Kitty Contenders</h2>
      <p>Who {message}?</p>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <Cat {...cat} addPicnicCat={addPicnicCat} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
