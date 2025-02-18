import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const At: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2.5a5.5 5.5 0 1 0 3.52 9.726a.75.75 0 0 1 .96 1.153A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 1 0 2 0A5.5 5.5 0 0 0 8 2.5M10 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0"
      clipRule="evenodd"
    ></path>
  </svg>
);
