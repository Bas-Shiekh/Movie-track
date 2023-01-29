export interface IGenres {
  id: number;
  name: string;
}

export interface ICard {
  id: number;
  title: string;
  image: string;
  genres: string[];
}

export interface iHeadSection {
  id: number;
  image: string | undefined;
  title: string | undefined;
  production: string | undefined;
  status: string | undefined;
  releaseDate: string | undefined;
  imdb: string | undefined;
  overview: string | undefined;
  style: string;
}
