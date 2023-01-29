/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import axios from '@/axios';
import GenresNav from '@/components/Navbar/GenresNav';
import { IGenres } from '@/utils/interfaces';
import { headerBefore } from '@/styles/styles';
import Card from '@/components/Card';
import { imageUrlGenerator } from '@/utils/imageUrlGenerator';
import { useRouter } from 'next/router';
import HeadSection from '@/components/HeadSection';

const Home: FC<{
  genres: IGenres[];
  movie: any;
  topRated: any;
  trending: any;
}> = ({ genres, movie, topRated, trending }) => {
  const router = useRouter();
  if (!movie) router.replace('/');

  return (
    <>
      <Head>
        <title>MovieTrack</title>
        <meta
          name="description"
          content="website about movie trailer and description like details list of movies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#222222] scroll-smooth">
        <HeadSection
          id={movie.id}
          image={imageUrlGenerator(movie.backdrop_path)}
          title={movie.original_title}
          production={movie.production_companies[0].name}
          status={movie.status}
          releaseDate={movie.release_date}
          imdb={movie.vote_average.toString().slice(0, 3)}
          overview={movie.overview}
          style="bg-gradient-to-t from-[#000000] via-[70%] to-transparent"
        />
        <section
          className="flex flex-col justify-center items-center gap-[4rem] py-[3rem] md:px-[4rem] lg:px-[4rem] bg-slate-50"
          id="genres"
        >
          <h3
            className={`font-bold text-[3rem] text-[#333333] relative ${headerBefore} md:text-[2rem]`}
          >
            Categories
          </h3>
          <nav className="flex gap-4 flex-wrap items-center- justify-center w-full md:w-[60%]">
            {genres.map((genre: IGenres) => (
              <GenresNav name={genre.name} key={genre.id} id={genre.id} />
            ))}
          </nav>
        </section>
        <section
          className="w-full flex flex-col justify-center items-center gap-[4rem] py-[3rem] md:px-[4rem]"
          id="top-rated"
        >
          <h3
            className={`font-bold text-[3rem] text-slate-50 relative ${headerBefore} md:text-[2rem]`}
          >
            Top Rated
          </h3>
          <div className="grid grid-rows-1 w-full overflow-y-auto grid-flow-col auto-cols-[70%] px-[4rem] py-[1rem] gap-[2rem] scroll-smooth snap-x md:auto-cols-auto md:pl-[0]">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              topRated.results.map((topMovie: any) => {
                return (
                  <Card
                    id={topMovie.id}
                    key={topMovie.id}
                    title={topMovie.original_title}
                    image={topMovie.backdrop_path}
                    genres={topMovie.genre_ids}
                  />
                );
              })
            }
          </div>
        </section>
        <section
          className="w-full flex flex-col justify-center items-center gap-[4rem] py-[3rem] md:px-[2rem] bg-slate-50"
          id="trending"
        >
          <h3
            className={`font-bold text-[3rem] text-[#333333] relative ${headerBefore} md:text-[2rem]`}
          >
            Trending
          </h3>
          <div className="grid grid-rows-1 w-full overflow-y-auto grid-flow-col auto-cols-[70%] px-[4rem] py-[1rem] gap-[2rem] scroll-smooth snap-x md:auto-cols-auto md:pl-[0]">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              trending.results.map((topMovie: any) => {
                return (
                  <Card
                    id={topMovie.id}
                    key={topMovie.id}
                    title={topMovie.original_title}
                    image={topMovie.backdrop_path}
                    genres={topMovie.genre_ids}
                  />
                );
              })
            }
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const random = Math.floor(Math.random() * 992);

  const categoryResponse = await axios.get(
    `/genre/movie/list?api_key=${process.env.API_KEY}`
  );

  let randomFilm = { data: undefined };

  const randomFilmResponse = await axios.get(
    `/movie/${random}?api_key=${process.env.API_KEY}`
  );

  if (randomFilmResponse.data) {
    randomFilm = randomFilmResponse;
  } else {
    const filmResponse = await axios.get(
      `/movie/1?api_key=${process.env.API_KEY}`
    );
    randomFilm = filmResponse;
  }

  const topRatedResponse = await axios.get(
    `/movie/top_rated?api_key=${process.env.API_KEY}`
  );

  const trendingResponse = await axios.get(
    `/trending/all/week?api_key=${process.env.API_KEY}`
  );

  const { genres } = categoryResponse.data;

  return {
    props: {
      genres,
      movie: randomFilm.data,
      topRated: topRatedResponse.data,
      trending: trendingResponse.data,
    },
  };
};
