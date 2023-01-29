import { FC } from 'react';

const GenresTagCard: FC<{ cat: string }> = ({ cat }) => {
  return (
    <p className="text-white bg-teal-700 rounded-full px-[0.6rem] py-[0.4rem] text-[1rem] md:text-[0.8rem] shadow-md">
      {cat}
    </p>
  );
};

export default GenresTagCard;
