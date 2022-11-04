import Image from 'next/image';
import React from 'react';

const Cat = ({ url }) => {
  return (
    <button>
      <Image src={url} alt='' width='200' height={200} />
    </button>
  );
};

export default Cat;
