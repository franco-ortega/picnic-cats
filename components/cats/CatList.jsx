import Cat from './Cat';

const CatList = ({ cats }) => {
  return (
    <ul>
      {cats.map((cat) => (
        <li key={cat.id}>
          <Cat url={cat.url} />
        </li>
      ))}
    </ul>
  );
};

export default CatList;
