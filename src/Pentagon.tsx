import React, { SVGProps } from "react";

export function Pentagon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.392 1.648a2.5 2.5 0 0 1 3.37.01l5.43 4.98a2.5 2.5 0 0 1 .68 2.64l-2.027 6.02a2.5 2.5 0 0 1-2.37 1.701H6.65a2.5 2.5 0 0 1-2.351-1.65l-2.15-5.947A2.5 2.5 0 0 1 2.822 6.7l5.57-5.052Zm2.693.747a1.5 1.5 0 0 0-2.021-.006L3.492 7.44a1.5 1.5 0 0 0-.403 1.62l2.15 5.948a1.5 1.5 0 0 0 1.41.99h6.827a1.5 1.5 0 0 0 1.421-1.02l2.027-6.02a1.5 1.5 0 0 0-.408-1.583l-5.43-4.981Z"
      />
    </svg>
  );
}
export default Pentagon;