import React, { SVGProps } from "react";

export function Oval(props: SVGProps<SVGSVGElement>) {
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
        d="M2 10a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6Zm6-5a5 5 0 0 0 0 10h4a5 5 0 0 0 0-10H8Z"
      />
    </svg>
  );
}
export default Oval;
