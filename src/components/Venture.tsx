import { motion } from 'framer-motion';
import React from 'react';
import { ArrowTopRight } from '../assets/icons/Arrow';
import { Link } from 'react-router-dom';

interface VentureCardProps {
  title: string;
  imageSrc: string;
  link: string;
  comingSoon?: boolean;
  description?: string;
}

const VentureCard: React.FC<VentureCardProps> = ({
  title,
  imageSrc,
  link,
  comingSoon,
  description,
}) => {
  if (comingSoon) {
    return (
      <div className="border p-5 cursor-not-allowed rounded-xl border-dashed border-white/20 flex items-center">
        <div className="min-w-1/3">
          <img className="h-20 w-32 rounded-lg" src={imageSrc} alt={title} />
        </div>
        <div className="flex gap-1 p-4 py-2 flex-col">
          <div className="text-base flex items-center gap-4 font-medium">
            {title}
            <div className="py-1 px-2 text-xs rounded-md bg-white/10 text-white/80">
              coming soon
            </div>
          </div>
          {description && (
            <div className="text-sm text-[#b4b3b1]">{description}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group w-full border border-white/20 p-1 flex flex-col gap-2 h-80 rounded-md">
      <div className="h-full relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover h-full w-full rounded-[2px]"
        />
        {/* Desktop version with hover animation */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 30, opacity: 0 }}
            whileInView={{ y: 30, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="py-1 px-2 border-white/20 absolute bottom-2 left-2 bg-gray-950 rounded-sm border w-fit text-xs text-white/70"
          >
            {title}
          </motion.div>
        </div>
        {/* Mobile version (always visible) */}
        <div className="lg:hidden py-1 px-2 border-white/20 absolute bottom-2 left-2 bg-gray-950 rounded-sm border w-fit text-xs text-white/70">
          {title}
        </div>
      </div>
      <div className="w-full">
        <Link
          to={link}
          className="py-[6px] rounded-[2px] text-white/70 hover:bg-white/10 cursor-pointer transition-colors ease-in-out border flex items-center justify-center text-sm border-white/20"
        >
          View Live
          <span>
            <ArrowTopRight className="text-base ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

const Venture: React.FC = () => {
  const ventures = [
    {
      title: 'Weathleats',
      imageSrc: '/ventures/weathleats.webp',
      link: 'http://weathleats.vercel.app',
    },
    {
      title: 'Devscook',
      imageSrc: '/ventures/devscook.jpg',
      link: 'https://devscook.com',
    },
    {
      title: 'Lightroom presets',
      imageSrc: '/ventures/lightroom.png',
      link: '#',
      comingSoon: true,
      description:
        'Custom made lightroom presets that will make your photos look professional.',
    },
    {
      title: 'Wallpaper packs',
      imageSrc: '/ventures/wall4.webp',
      link: '#',
      comingSoon: true,
      description:
        'Custom built premium wallpapers for desktops and mobile devices.',
    },
  ];

  return (
    <div className="lg:px-0 px-3 w-full flex mt-6 flex-col gap-4 rounded-xl text-white">
      <h2 className="text-xl font-medium text-white/90">Ventures</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        {ventures.map((venture, index) => (
          <VentureCard key={index} {...venture} />
        ))}
      </div>
    </div>
  );
};

export default Venture;
