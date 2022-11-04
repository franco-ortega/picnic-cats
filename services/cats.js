import { getData } from './request';

export const getCats = () => getData('api/cats');
