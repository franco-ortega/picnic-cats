import Image from 'next/image';
import { useMessage } from '../../hooks/useMessage';

const PicnicCat = ({ url, index }) => {
  const { message } = useMessage(index);
  return (
    <>
      <Image src={url} alt='' width={200} height={200} priority />
      <p>Meow {message}</p>
    </>
  );
};

export default PicnicCat;
