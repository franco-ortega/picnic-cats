import Image from 'next/image';
import { useState } from 'react';
import styles from './Cat.module.scss';

const Cat = ({ url, addPicnicCat }) => {
  const [selected, setSelected] = useState(false);

  const onCatClick = () => {
    addPicnicCat(url);
    setSelected(true);
  };

  return (
    <div className={styles.Cat}>
      <button
        style={selected ? { visibility: 'hidden', borderColor: 'white' } : null}
        onClick={onCatClick}
      >
        <Image src={url} alt='' width={150} height={150} priority />
      </button>
    </div>
  );
};

export default Cat;
