import React, { SVGProps } from "react";

export function ChevronCircleUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 10a8 8 0 1 0 16 0a8 8 0 0 0-16 0Zm4.854 1.854a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L10 8.707l-3.146 3.147Z"
      />
    </svg>
  );
}
export default ChevronCircleUpFilled;
