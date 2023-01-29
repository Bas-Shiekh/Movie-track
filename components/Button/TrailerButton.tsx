import { FC } from 'react';

const TrailerButton: FC = () => {
  return (
    <button className="group w-[100px] h-[100px] bg-inherit border-4 border-r-0 border-red-600 rounded-full transition-all duration-300 ease-in-out text-white relative cursor-pointer md:w-[70px] md:h-[70px] hover:border-green-300 ">
      <div className="absolute flex gap-4 items-center top-1/2 left-[40%] -translate-y-1/2 w-[400px]">
        <i className="fa-solid fa-play text-[1.5rem] text-red-600 md:text-[1.2rem] group-hover:text-green-300" />
        <p className="text-[1.5rem] text-green-300 md:text-[1.2rem] group-hover:text-red-600">
          Play the movie trailer
        </p>
      </div>
    </button>
  );
};

export default TrailerButton;
