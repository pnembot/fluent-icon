import React, { SVGProps } from "react";

export function CircleLine(props: SVGProps<SVGSVGElement>) {
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
        d="M3.018 9.5h13.964a7 7 0 0 0-13.964 0ZM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm14.982.5H3.018a7 7 0 0 0 13.964 0Z"
      />
    </svg>
  );
}
export default CircleLine;
