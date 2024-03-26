import React, { SVGProps } from "react";

export function ArrowHookUpLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M6 15.5a.5.5 0 0 0 .5.5H11c1.636 0 2.9-.618 3.749-1.574C15.59 13.479 16 12.232 16 11c0-1.232-.41-2.48-1.251-3.426C13.899 6.618 12.636 6 11 6H5.707l2.647-2.646a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L5.707 7H11c1.364 0 2.35.507 3.001 1.238C14.66 8.98 15 9.982 15 11s-.34 2.02-.999 2.762C13.351 14.493 12.364 15 11 15H6.5a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default ArrowHookUpLeft;
