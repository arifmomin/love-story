import React, { useEffect, useState } from "react";
import { FaHeart } from 'react-icons/fa'
import fram from './TimeLineImage/timeline.png'


const TimeLine = () => {
const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2024-10-01T00:00:00");

    const updateCounter = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='TimeLine' className='w-full h-full py-16 md:py-24'>
        <div className='container'>
            <div>
                <h2 className='text-2xl md:text-[36px] text-fontColor font-greatvibs font-semibold text-center mb-2 md:mb-0'>Start Our Journey</h2>
                <div className='flex justify-center items-center gap-x-2 md:gap-x-4'>
                    <span className='w-[35px] md:w-[50px] h-[1px] bg-fontColor inline-block'></span>
                    <span className='text-base text-fontColor inline-block'><FaHeart/></span>
                    <span className='w-[35px] md:w-[50px] h-[1px] bg-fontColor inline-block'></span>
                </div>
            </div>
            <div className="flex justify-center items-center md:gap-[50px] mt-8 md:mt-12">
      <div className="w-[250px] relative">
        <img src={fram} alt="timeline.png" />
        <div className="absolute top-[55%] left-1/2 w-full h-full flex flex-col justify-center items-center counter">
          <h3 className="text-sm sm:text-base md:text-[56px] md:leading-[150%] text-fontColor font-semibold font-caps">{timeElapsed.days}</h3>
          <p className="text-sm sm:text-base md:text-[36px] text-fontColor font-medium font-caps">Days</p>
        </div>
      </div>
      <div className="w-[250px] relative">
        <img src={fram} alt="timeline.png" />
        <div className="absolute top-[55%] left-1/2 w-full h-full flex flex-col justify-center items-center counter">
          <h3 className="text-sm sm:text-base md:text-[56px] md:leading-[150%] text-fontColor font-semibold font-caps">{timeElapsed.hours}</h3>
          <p className="text-sm sm:text-base md:text-[36px] text-fontColor font-medium font-caps">Hours</p>
        </div>
      </div>
      <div className="w-[250px] relative">
        <img src={fram} alt="timeline.png" />
        <div className="absolute top-[55%] left-1/2 w-full h-full flex flex-col justify-center items-center counter">
          <h3 className="text-sm sm:text-base md:text-[56px] md:leading-[150%] text-fontColor font-semibold font-caps">{timeElapsed.minutes}</h3>
          <p className="text-sm sm:text-base md:text-[36px] text-fontColor font-medium font-caps">Minutes</p>
        </div>
      </div>
      <div className="w-[250px] relative">
        <img src={fram} alt="timeline.png" />
        <div className="absolute top-[55%] left-1/2 w-full h-full flex flex-col justify-center items-center counter">
          <h3 className="text-sm sm:text-base md:text-[56px] md:leading-[150%] text-fontColor font-semibold font-caps">{timeElapsed.seconds}</h3>
          <p className="text-sm sm:text-base md:text-[36px] text-fontColor font-medium font-caps">Seconds</p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default TimeLine