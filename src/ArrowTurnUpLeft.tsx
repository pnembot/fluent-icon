import React, { SVGProps } from "react";

export function ArrowTurnUpLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M8.854 3.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L5.707 8H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 0 1 0V10a3 3 0 0 0-3-3H5.707l3.147-3.146a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default ArrowTurnUpLeft;
