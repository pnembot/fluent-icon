import React, { SVGProps } from "react";

export function System(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-7ZM4.5 5A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 5h-11Z"
      />
    </svg>
  );
}
export default System;
