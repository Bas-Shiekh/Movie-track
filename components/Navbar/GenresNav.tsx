import { FC } from 'react';
import Link from 'next/link';

const GenresNav: FC<{ name: string; id: number }> = ({ name, id }) => {
  return (
    <Link
      href={`${name}?id=${id}`}
      className="bg-slate-600 px-[1rem] py-[0.2rem] rounded-full text-white text-[1.5rem] transition duration-300 ease-in-out hover:bg-slate-800 hover:scale-[1.1] md:text-[1rem]"
    >
      {name}
    </Link>
  );
};

export default GenresNav;
