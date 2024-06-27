// import React from 'react'

const HomeCard = () => {
  return (
    <div className="flex flex-shrink-0 flex-col gap-3 justify-between w-[450px] max-w-full rounded-lg bg-[#EEEDE4] hover:bg-white/50 duration-300">
      <img
        src="/images/artical_placeholder.png"
        alt="artical_placeholder"
        className="h-[220px] rounded-t-lg"
      />
      <div className="py-4 px-3">
        <h3 className="text-xl">
          Coding With AI Guide: Learn Midjourney, ChatGPT, & More
        </h3>
        <p className="mt-1.5 text-sm truncate">
          Courses led by Jake Melanson, Bob Morman, Leap Ce...
        </p>
        <div className="mt-2.5 text-sm flex items-center gap-1">
          4.5{" "}
          {[1, 2, 3, 4].map(() => (
            <span>
              <img src="/icons/star.svg" alt="start" />
            </span>
          ))}{" "}
          (35,562)
        </div>
        <div className="mt-2.5 flex items-center gap-1">
          <img
            src="/images/home_card_base.png"
            alt="home_card_base"
            width={25}
            height={25}
          />
          0.002 Base
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
