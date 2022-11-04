import Head from 'next/head';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Picnic Cats</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <h1>Picnic Cats</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
