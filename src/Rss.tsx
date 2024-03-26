import React, { SVGProps } from "react";

export function Rss(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2.5 0a.5.5 0 0 0 0 1a6.5 6.5 0 0 1 6.5 6.5a.5.5 0 0 0 1 0A7.5 7.5 0 0 0 6.5 6ZM6 9.5a.5.5 0 0 1 .5-.5a4.5 4.5 0 0 1 4.5 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 0 0 6.5 10a.5.5 0 0 1-.5-.5ZM7 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default Rss;