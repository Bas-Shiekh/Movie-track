import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const instance: any = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
