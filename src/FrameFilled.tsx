import React, { SVGProps } from "react";

export function FrameFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 2a.5.5 0 0 1 .5.5V4h10V2.5a.5.5 0 0 1 1 0V4h1.5a.5.5 0 0 1 0 1H16v10h1.5a.5.5 0 0 1 0 1H16v1.5a.5.5 0 0 1-1 0V16H5v1.5a.5.5 0 0 1-1 0V16H2.5a.5.5 0 0 1 0-1H4V5H2.5a.5.5 0 0 1 0-1H4V2.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default FrameFilled;