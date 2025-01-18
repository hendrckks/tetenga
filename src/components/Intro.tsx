import { Link } from 'react-router-dom';
import EnhancedPulsingLiveButton from './ui/LiveButton';
import LocalTimeClock from './LocalTime';
import { X } from './icons/X';
import { At } from './icons/At';

const Intro = () => {
  return (
    <div className="mb-14 lg:px-0 px-3 w-full justify-between flex">
      <div className="flex flex-col">
        <div className="flex items-center lg:px-0 px-2 justify-between">
          <img
            src="/me.jpg"
            alt="tetenga image"
            className="rounded-full h-24"
          />
          <div className="flex items-center flex-col gap-5 lg:gap-10">
            <div>
              <LocalTimeClock />
            </div>
            <div className="flex gap-5">
              <Link
                to="https://x.com/atomic_ke"
                className="p-2 flex cursor-pointer items-center justify-center bg-white/20 rounded-sm lg:rounded-md"
              >
                <X className="text-lg" />
              </Link>
              <a
                href="mailto:samueltetenga@gmail.com"
                className="flex cursor-pointer gap-2 bg-[#ff3c00] hover:bg-[#e83600] text-[#0f0f0f] px-2 py-1 items-center rounded-sm lg:rounded-md"
              >
                <At />
                <span className="text-sm font-medium">Get in touch</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-5">
          <div className="flex gap-3 py-2 px-3 text-xs rounded-xl bg-white/10 w-fit">
            <EnhancedPulsingLiveButton />
            <span className="text-white/80">Available for work</span>
          </div>
          <div>
            <h2 className="lg:text-[22px] text-white/80 text-lg">
              I'm <span className="text-white/50">Tetenga</span> -- a software
              developer and creator.
            </h2>
          </div>
          <div className="lg:w-2/3 w-full">
            <p className="text-white/80 lg:text-[15px] text-sm">
              I started as a freelance developer making websites and doing UI
              design for businesses and Entrepreneurs, but now I do a mix of
              everything from media production to running a design and
              development agency. Besides that i love cars, tech and business
              topics. I'm from kenya and currently living in Kenya.
            </p>
          </div>
          <div className="flex lg:gap-4 gap-2 items-center">
            <span className="text-sm text-white/50">Need development?</span>
            <Link
              to="https://devscook.com"
              className="px-1 cursor-pointer flex items-center bg-transparent rounded-full hover:bg-white/10 transition-all ease-in-out duration-200"
            >
              <img src="/dk.png" alt="devcook logo" className="h-10" />
              <span className="text-sm mr-4 font-medium text-white/80">
                Devcook
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
