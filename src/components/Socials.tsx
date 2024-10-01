import { Link } from 'react-router-dom';
import { ArrowUpRight16Solid } from './icons/ArrowUpSolid';
import { Instagram } from './icons/Instagram';
import { X } from './icons/X';

const Socials = () => {
  return (
    <div className="w-full mb-20 lg:px-0 px-3">
      <p className="text-xl font-medium">Elsewhere</p>
      <div className="flex mt-5 gap-4 items-center">
        <Link
          to="https://www.instagram.com/hendrckks/"
          className="flex border group gap-2   text-white/50 cursor-pointer rounded-lg border-white/20 items-center p-2"
        >
          <Instagram />
          <span className="text-sm">Instagram</span>
          <ArrowUpRight16Solid className="text-transparent group-hover:text-white transition-colors ml-2" />
        </Link>
        <Link
          to="https://x.com/atomic_ke"
          className="flex gap-2 group text-white/50 rounded-lg cursor-pointer border border-white/20 items-center px-4 py-2"
        >
          <X />
          <span className="text-sm ">x.com</span>
          <ArrowUpRight16Solid className="text-transparent group-hover:text-white transition-colors ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
