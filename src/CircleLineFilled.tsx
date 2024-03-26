import React, { SVGProps } from "react";

export function CircleLineFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17.985 10.5H2.015a8 8 0 0 0 15.97 0Zm0-1H2.015a8 8 0 0 1 15.97 0Z"
      />
    </svg>
  );
}
export default CircleLineFilled;
