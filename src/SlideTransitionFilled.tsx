import React, { SVGProps } from "react";

export function SlideTransitionFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM6 5H5v10h1V5Zm3 0H8v10h1V5Zm3 0v10h1V5h-1Z"
      />
    </svg>
  );
}
export default SlideTransitionFilled;
