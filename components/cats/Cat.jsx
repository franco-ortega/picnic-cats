import Image from 'next/image';

const Cat = ({ url, addPicnicCat }) => {
  const onCatClick = () => addPicnicCat(url);
  return (
    <button onClick={onCatClick}>
      <Image src={url} alt='' width={150} height={150} priority />
    </button>
  );
};

export default Cat;
