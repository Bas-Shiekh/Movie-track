import Link from 'next/link';
import { FC } from 'react';

const NavLink: FC<{ text: string; id: string }> = ({ text, id }) => {
  return (
    <Link
      href={`/#${id}`}
      className="text-[16px] font-medium text-[#ffffff] hover:text-[#bdbdbd]"
    >
      {text}
    </Link>
  );
};

export default NavLink;
