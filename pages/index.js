import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useCats } from '../hooks/useCats';

export default function Home() {
  const { cats } = useCats();

  console.log(cats);

  return (
    <div>
      <main>Picnic</main>
    </div>
  );
}
