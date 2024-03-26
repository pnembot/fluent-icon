import React, { SVGProps } from "react";

export function ArrowCircleRight(props: SVGProps<SVGSVGElement>) {
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
        d="m10.854 13.354l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 9.5H6.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708ZM18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"
      />
    </svg>
  );
}
export default ArrowCircleRight;
