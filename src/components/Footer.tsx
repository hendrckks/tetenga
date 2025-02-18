const Footer = () => {
  return (
    <div className="w-full flex lg:mt-10 justify-center flex-col gap-10 lg:px-0 px-4">
      <div className="flex justify-center">
        <p className="lg:text-base text-sm text-white/60">
          Thanks for stopping by.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="llg:text-sm text-xs text-white/80">
          &copy; {new Date().getFullYear()} Tetenga. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
