import Image from 'next/image';
import React from 'react';

const Cat = ({ url }) => {
  return (
    <button>
      <Image src={url} alt='' />
      Meow
    </button>
  );
};

export default Cat;
