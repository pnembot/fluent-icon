import React, { SVGProps } from "react";

export function ArrowTurnRight(props: SVGProps<SVGSVGElement>) {
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
        d="M11.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L14.293 8H8a2 2 0 0 0-2 2v6.5a.5.5 0 0 1-1 0V10a3 3 0 0 1 3-3h6.293l-3.147-3.146a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default ArrowTurnRight;
