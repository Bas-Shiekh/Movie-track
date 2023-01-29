import Link from 'next/link';
import { FC } from 'react';
import NavLink from './NavLink';

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-2 shadow-md bg-inherit fixed left-0 top-0 w-full z-50">
      <Link href="/">
        <h1 className="font-bold text-[2rem] text-[#ffffff]">MovieTrack</h1>
      </Link>
      <nav className="flex justify-between gap-6">
        <NavLink text="Genres" id='genres' />
        <NavLink text="Top Rated" id="top-rated" />
        <NavLink text="Trending" id="trending" />
      </nav>
    </header>
  );
};

export default Header;
