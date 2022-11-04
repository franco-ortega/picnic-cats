import Image from 'next/image';

const Cat = ({ id, url, addPicnicCat }) => {
  const onCatClick = () => {
    console.log('Meow', id);
    addPicnicCat(url);
  };

  return (
    <button onClick={onCatClick}>
      <Image src={url} alt='' width={200} height={200} priority />
    </button>
  );
};

export default Cat;
