import { FC } from 'react';
import Image from 'next/image';
import { imageUrlGenerator } from '@/utils/imageUrlGenerator';
import { ICard } from '@/utils/interfaces';
import { category } from '@/utils/category';
import GenresTagCard from './GenresTagCard';
import { useRouter } from 'next/router';

const Card: FC<ICard> = ({ id, image, title, genres }) => {
  const router = useRouter();

  const navigation = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <div
      onClick={() => navigation(id)}
      key={id}
      className="group w-[250px] h-[400px] snap-center relative overflow-hidden rounded-[10px] cursor-pointer sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[400px]"
    >
      <Image
        src={imageUrlGenerator(image)}
        alt={title ? title : 'movie title'}
        fill
        sizes="(max-width: 768px) 100%"
        priority
        className="w-full h-full group-hover:scale-[1.1] group-hover:rotate-[5deg] transition-all  group-hover:transition-all  duration-[0.8s] ease-in-out"
      />
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-gradient-to-t from-[#000000] via-[40%] to-transparent flex items-end justify-center p-4 group-hover:via-[70%] transition-all  duration-75 ease-in-out">
        <h4 className="text-[1.5rem] text-center text-white font-semibold">
          {title ? title : 'Unknown'}
        </h4>
      </div>
      <div className="w-full h-full absolute top-[-100%] group-hover:top-0 z-10 flex justify-center items-start p-8 gap-2 group-hover:transition-all  duration-[1s] ease-in-out">
        {genres.slice(0, 3).map((genre: string, i: number) => {
          if (category[genre])
            return <GenresTagCard cat={category[genre]} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Card;
