import React, { SVGProps } from "react";

export function ArrowClockwise(props: SVGProps<SVGSVGElement>) {
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
        d="M3.066 9.05a7 7 0 0 1 12.557-3.22l.126.17H12.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5V2.502a.5.5 0 0 0-1 0v2.207a8 8 0 1 0 1.986 4.775a.5.5 0 0 0-.998.064A7 7 0 1 1 3.066 9.05Z"
      />
    </svg>
  );
}
export default ArrowClockwise;
