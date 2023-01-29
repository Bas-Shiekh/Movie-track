import { FC } from 'react';
import axios from '@/axios';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { imageUrlGenerator } from '@/utils/imageUrlGenerator';
import HeadSection from '@/components/HeadSection';

const MoviePage: FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.original_title}</title>
      </Head>
      <HeadSection
        id={data.id}
        image={imageUrlGenerator(data.backdrop_path)}
        title={data.original_title}
        production={data.production_companies[0].name}
        status={data.status}
        releaseDate={data.release_date}
        imdb={data.vote_average.toString().slice(0, 3)}
        overview={data.overview}
        style="bg-gradient-to-l from-[#000000] via-[40%] to-transparent"
      />
    </>
  );
};

export default MoviePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params }: any = context;

  const { data } = await axios.get(
    `/movie/${Number(params.movieId)}?api_key=${process.env.API_KEY}`
  );

  return {
    props: { data },
  };
};
