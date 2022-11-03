import { getData } from './request';

export const getCats = () =>
  getData(
    'https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_i3cteOdzc3qCGgirzWKli2GY62oWjyTzjX8LCcJsAQKt1KaI1EMEvZzhLK9RWlS9'
  );
