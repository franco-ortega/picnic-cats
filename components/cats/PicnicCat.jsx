import Image from 'next/image';

const PicnicCat = ({ url }) => {
  return <Image src={url} alt='' width={200} height={200} priority />;
};

export default PicnicCat;
