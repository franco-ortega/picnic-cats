const METHODS_WITHOUT_BODY = ['GET', 'DELETE'];

const request = async (method, path, data) => {
  console.log(process.env.API_URL);
  const headers = METHODS_WITHOUT_BODY.includes(method)
    ? {}
    : { 'Content-Type': 'application/json' };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method,
      headers,
      body: JSON.stringify(data)
    }
  ).then((res) => res.json());

  return response;
};

export const getData = (path) => request('GET', path);
