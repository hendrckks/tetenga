import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightBoxOutline } from './icons/ArrowUp';

interface CarouselImage {
  src: string;
  alt: string;
}

const ImageCarousel: React.FC<{ images: CarouselImage[] }> = ({ images }) => {
  const extendedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full relative pb-8 pt-4 px-4">
      <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[#0f0f0f]/50 z-20 pointer-events-none"></div>
      <motion.div
        className="flex items-center justify-center space-x-10"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-40 relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:z-10"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Venture: React.FC = () => {
  const carouselImages: CarouselImage[] = [
    { src: '/carousel/xd.webp', alt: 'Project 1' },
    { src: '/carousel/cv.webp', alt: 'Project 2' },
    { src: '/carousel/xf.webp', alt: 'Project 3' },
    { src: '/carousel/xg.webp', alt: 'Project 4' },
    { src: '/carousel/xh.webp', alt: 'Project 5' },
    { src: '/carousel/xd.webp', alt: 'Project 1' },
    { src: '/carousel/cv.webp', alt: 'Project 2' },
    { src: '/carousel/xf.webp', alt: 'Project 3' },
    { src: '/carousel/xg.webp', alt: 'Project 4' },
    { src: '/carousel/xh.webp', alt: 'Project 5' },
  ];

  return (
    <div className="lg:px-0 px-3 w-full flex mt-6 flex-col gap-4 rounded-xl text-white">
      <h2 className="text-xl font-medium">Ventures</h2>
      <div className="lg:px-5 group border lg:border-transparent border-white/20 w-full flex flex-col lg:flex-row items-start lg:items-center rounded-xl bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 lg:hidden">
          <ImageCarousel images={carouselImages} />
          <div className="absolute inset-0 bg-black/20 lg:bg-black/60"></div>
        </div>
        <Link
          to="https://dev-cook.web.app"
          className="flex w-full lg:w-1/2 lg:gap-4 gap-2 flex-col mb-8 lg:mb-0 z-30 relative"
        >
          <div className="flex gap-2 mt-4 lg:mt-[-20px] items-center">
            <Link
              to="https://dev-cook.web.app"
              className="px-1 cursor-pointer flex items-center"
            >
              <img src="/dk.png" alt="devcook logo" className="h-12" />
              <span className="text-base mr-4 font-medium">Devcook</span>
            </Link>
          </div>
          <div className="mx-4 flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h2 className="lg:text-xl text-lg font-bold">Devcook agency</h2>
              <Link to="https://dev-cook.web.app">
                <ArrowUpRightBoxOutline className="text-transparent transition-all ease-in-out duration-200 scale-105 mt-1 group-hover:text-white text-xl" />
              </Link>
            </div>
            <p className="lg:text-sm text-xs text-white/80">
              Premium service based agency that is objectively focused on
              providing quality designs, brand development and website
              development services to companies that are serious about their
              growth and reputation.
            </p>
          </div>
        </Link>
        <div className="w-full lg:w-1/2 hidden lg:block">
          <ImageCarousel images={carouselImages} />
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="border cursor-not-allowed p-5 rounded-xl flex items-center border-white/20">
          <div>
            <img
              className="lg:h-20 h-[74px] w-lg:28 w-32 rounded-lg"
              src="/ventures/lightroom.png"
            />
          </div>
          <div className="flex gap-1 p-4 py-2 flex-col">
            <div className="lg:text-base text-sm flex items-center gap-2 font-medium">
              Lightroom presets
              <div className="py-1 px-2 text-xs rounded-md bg-white/10 text-white/80">
                coming soon
              </div>
            </div>
            <div className="lg:text-sm text-xs text-white/60">
              Custom made lightroom presets that will make your photos look
              professional.
            </div>
          </div>
        </div>
        <div className="border p-5 cursor-not-allowed rounded-xl border-dashed flex items-center border-white/20">
          <div>
            <img
              className="lg:h-16 h-[74px] w-lg:28 w-32 rounded-lg"
              src="/ventures/wall4.webp"
            />
          </div>
          <div className="flex gap-1 p-4 py-2 flex-col">
            <div className="lg:text-base text-sm flex gap-2 items-center font-medium">
              Wallpaper packs
              <div className="py-1 px-2 rounded-md flex items-center justify-center text-xs bg-white/10 text-white/80">
                coming soon
              </div>
            </div>
            <div className="lg:text-sm text-xs text-white/60">
              Custom built premium wallpapers for desktops and mobile devices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venture;
