import { twMerge } from 'tailwind-merge';

interface props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: props) => {
  return (
    <div
      className={twMerge(
        'w-full lg:w-1/2 flex flex-col items-center mx-auto justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
