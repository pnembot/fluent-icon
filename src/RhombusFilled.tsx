import React, { SVGProps } from "react";

export function RhombusFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.89 4.296A2 2 0 0 1 6.76 3h10.237a2 2 0 0 1 1.872 2.704l-3.76 10A2 2 0 0 1 13.238 17H3.001a2 2 0 0 1-1.872-2.704l3.76-10Z"
      />
    </svg>
  );
}
export default RhombusFilled;