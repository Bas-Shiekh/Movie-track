import axios from '@/axios';
import Card from '@/components/Card';
import { headerBefore } from '@/styles/styles';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GenresPage: FC<{ data: any }> = ({ data }) => {
  const router = useRouter();
  return (
    <main className="bg-[#222222] scroll-smooth py-12">
      <section className="flex flex-col justify-center items-center gap-[4rem] py-[3rem] md:px-[4rem] lg:px-[4rem]">
        <h3
          className={`font-bold text-[3rem] text-slate-50 relative ${headerBefore} md:text-[2rem]`}
        >
          {router.query.genreId}
        </h3>
        <div className="grid grid-cols-2 w-full px-[1rem] py-[1rem] gap-[2rem] scroll-smooth md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.results.map((movie: any) => {
              return (
                <Card
                  id={movie.id}
                  key={movie.id}
                  title={movie.original_title}
                  image={movie.backdrop_path}
                  genres={movie.genre_ids}
                />
              );
            })
          }
        </div>
      </section>
    </main>
  );
};

export default GenresPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { query }: any = context;
  const response = await axios.get(
    `/discover/movie?api_key=${process.env.API_KEY}&with_genres=${query.id}`
  );

  return {
    props: {
      data: response.data,
    },
  };
};
