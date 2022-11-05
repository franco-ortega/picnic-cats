import Image from 'next/image';
import { useMessage } from '../../hooks/useMessage';
import styles from './PicnicCat.module.scss';

const PicnicCat = ({ url, index }) => {
  const { message } = useMessage(index);
  return (
    <li className={styles.PicnicCat}>
      <p>Meow {message}!</p>
      <Image src={url} alt='' width={175} height={175} priority />
    </li>
  );
};

export default PicnicCat;
