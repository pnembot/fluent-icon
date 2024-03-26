import React, { SVGProps } from "react";

export function BranchFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 5a3 3 0 0 1-2.145 2.876c.178.223.416.483.72.744c.726.622 1.834 1.252 3.425 1.363a3 3 0 1 1 .168 1.01c-1.96-.078-3.342-.841-4.243-1.613a6.62 6.62 0 0 1-.425-.398v3.06a3 3 0 1 1-1 0V7.958A3 3 0 1 1 10 5Z"
      />
    </svg>
  );
}
export default BranchFilled;
