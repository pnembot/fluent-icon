import React, { SVGProps } from "react";

export function SubtractCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M6 10a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 6 10Zm4 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-1a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
      />
    </svg>
  );
}
export default SubtractCircle;
