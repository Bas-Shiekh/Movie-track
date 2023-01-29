import { FC } from 'react';
import Image from 'next/image';
import { iHeadSection } from '@/utils/interfaces';
import TrailerButton from '@/components/Button/TrailerButton';

const HeadSection: FC<iHeadSection> = ({
  id,
  image,
  title,
  production,
  status,
  releaseDate,
  imdb,
  overview,
  style,
}) => {
  return (
    <section
      className="w-full h-[100vh] flex items-center relative"
      id={`${id}`}
    >
      <Image
        src={image ? image : ''}
        alt={title ? title : 'movie'}
        fill
        className="w-full h-full object-cover absolute z-0 opacity-90"
      />
      <div className={`${style} w-full h-full absolute left-0 top-0 z-10`} />

      <div className="relative z-20 flex px-12 flex-col w-full gap-6 items-start md:w-[60%] lg:w-[50%]">
        <h2 className="text-[2.2rem] font-bold text-white md:text-[1.8rem] lg:text-[2.2rem]">
          {title}
        </h2>
        <div className="w-full flex flex-col justify-center gap-[1rem] lg:flex-row lg:items-center lg:justify-start">
          <p className="text-[#eeeeeeab] text-[1.5rem] md:text-[1.2rem] lg:text-[1rem]">
            Production:{' '}
            <label className="text-white font-semibold">
              {production && production}
            </label>
          </p>
          <span className="w-[5px] h-[5px] rounded-[50%] bg-white hidden shrink-0 lg:block" />
          <p className="text-[#eeeeeeab] text-[1.5rem] md:text-[1.2rem] lg:text-[1rem]">
            {status}:{' '}
            <label className="text-white font-semibold">{releaseDate}</label>
          </p>
        </div>
        <p className="text-[#ffa600fb] text-[1.8rem]">
          IMDb:{' '}
          <label className="text-white font-semibold">
            {imdb && '+' + imdb}
          </label>
        </p>
        <p className="text-[1.5rem] text-[#c5c5c5] md:text-[1em] lg:text-[1rem]">
          {overview}
        </p>
        <TrailerButton />
      </div>
    </section>
  );
};

export default HeadSection;
