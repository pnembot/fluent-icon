import React, { SVGProps } from "react";

export function DiamondFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2.586 11.414a2 2 0 0 1 0-2.828l6.002-6a2 2 0 0 1 2.828 0l6.002 6a2 2 0 0 1 0 2.828l-6.002 6a2 2 0 0 1-2.828 0l-6.002-6Z"
      />
    </svg>
  );
}
export default DiamondFilled;
