import Image from 'next/image';
import { useMessage } from '../../hooks/useMessage';

const PicnicCat = ({ url, index }) => {
  const { message } = useMessage(index);
  return (
    <>
      <p>Meow {message}!</p>
      <Image src={url} alt='' width={200} height={200} priority />
    </>
  );
};

export default PicnicCat;
