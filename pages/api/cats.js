export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await fetch(
      `${process.env.API_URL}${process.env.API_KEY}`
    ).then((res) => res.json());

    res.status(200).json(data);
  }
}
