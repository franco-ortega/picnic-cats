import Image from 'next/image';

const Cat = ({ url }) => {
  const onCatClick = () => {
    console.log('Meow');
  };

  return (
    <button onClick={onCatClick}>
      <Image src={url} alt='' width={200} height={200} priority />
    </button>
  );
};

export default Cat;
