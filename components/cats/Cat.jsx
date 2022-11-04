import Image from 'next/image';

const Cat = ({ url, addPicnicCat }) => {
  const onCatClick = () => addPicnicCat(url);
  return (
    <button onClick={onCatClick}>
      <Image src={url} alt='' width={200} height={200} priority />
    </button>
  );
};

export default Cat;
