import Image from 'next/image';
import styles from './Cat.module.scss';

const Cat = ({ url, addPicnicCat }) => {
  const onCatClick = () => addPicnicCat(url);
  return (
    <button className={styles.Cat} onClick={onCatClick}>
      <Image src={url} alt='' width={150} height={150} priority />
    </button>
  );
};

export default Cat;
