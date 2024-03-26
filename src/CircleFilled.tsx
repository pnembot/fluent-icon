import React, { SVGProps } from "react";

export function CircleFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path fill="currentColor" d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z" />
    </svg>
  );
}
export default CircleFilled;
