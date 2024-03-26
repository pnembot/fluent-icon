import React, { SVGProps } from "react";

export function GridDotsFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5.75 4a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Zm0 6a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM4 17.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM11.75 4a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM10 11.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM11.75 16a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM16 5.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5ZM17.75 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0ZM16 17.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5Z"
      />
    </svg>
  );
}
export default GridDotsFilled;