import React, { SVGProps } from "react";

export function Circle(props: SVGProps<SVGSVGElement>) {
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
        d="M10 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0a8 8 0 0 1-16 0Z"
      />
    </svg>
  );
}
export default Circle;