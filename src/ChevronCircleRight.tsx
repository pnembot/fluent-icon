import React, { SVGProps } from "react";

export function ChevronCircleRight(props: SVGProps<SVGSVGElement>) {
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
        d="M10 17a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm-8-7a8 8 0 1 0 16 0a8 8 0 0 0-16 0Zm6.146 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L11.293 10l-3.147 3.146Z"
      />
    </svg>
  );
}
export default ChevronCircleRight;
