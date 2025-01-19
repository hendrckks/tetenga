import React from 'react';
import { ArrowTopRight } from '../assets/icons/Arrow';
import { AdobeLightroom } from '../assets/icons/Lightroom';
import { Link } from 'react-router-dom';

interface VentureCardProps {
  title: string;
  imageSrc?: string;
  link: string;
  comingSoon?: boolean;
  description?: string;
  icon?: React.ReactNode;
}

const VentureCard: React.FC<VentureCardProps> = ({
  title,
  imageSrc,
  link,
  comingSoon,
  description,
  icon,
}) => {
  if (comingSoon) {
    return (
      <div className="border py-5 px-2 mt-5 cursor-not-allowed rounded-lg border-dashed border-white/20 grid grid-cols-4 items-center">
        <div className="col-span-1">
          {icon ? (
            <div className="h-20 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          ) : (
            <img
              className="h-20 md:w-20 justify-self-center w-full rounded-lg"
              src={imageSrc}
              alt={title}
            />
          )}
        </div>
        <div className="flex gap-1 w-full px-2 py-2 flex-col col-span-3">
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
      <div className="h-full group relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover h-full w-full rounded-[2px]"
        />
        {/* Desktop version with hover animation */}
        <div className="opacity-0 group-hover:opacity-100 ease-in-out transition-opacity duration-200 lg:block">
          <div className="py-1 px-2 border-white/20 absolute bottom-2 left-2 bg-gray-950 rounded-sm border w-fit text-xs text-white/70">
            {title}
          </div>
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
      title: 'Ventos',
      imageSrc: '/ventures/ventos(3).webp',
      link: '/',
    },
    {
      title: 'Lightroom presets',
      icon: <AdobeLightroom className="w-20 h-20" />,
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

  // Calculate the number of active (non-coming-soon) projects
  const activeProjectsCount = ventures.filter(
    (venture) => !venture.comingSoon
  ).length;

  return (
    <div className="lg:px-0 px-3 w-full flex flex-col gap-4 rounded-xl text-white">
      <h2 className="text-xl font-medium text-white/90">
        Projects
        <span className="text-xs ml-1 relative bottom-3">
          ({activeProjectsCount})
        </span>
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        {ventures.map((venture, index) => (
          <VentureCard key={index} {...venture} />
        ))}
      </div>
    </div>
  );
};

export default Venture;
