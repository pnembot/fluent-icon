import React, { SVGProps } from "react";

export function Shield(props: SVGProps<SVGSVGElement>) {
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
        d="M9.723 2.084a.5.5 0 0 1 .554 0a15.05 15.05 0 0 0 6.294 2.421A.5.5 0 0 1 17 5v4.5c0 3.891-2.307 6.73-6.82 8.467a.5.5 0 0 1-.36 0C5.308 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.495a15.05 15.05 0 0 0 6.293-2.421Zm-.124 1.262A15.969 15.969 0 0 1 4 5.428V9.5c0 3.392 1.968 5.863 6 7.463c4.032-1.6 6-4.071 6-7.463V5.428a15.969 15.969 0 0 1-5.6-2.082l-.4-.249l-.4.249Z"
      />
    </svg>
  );
}
export default Shield;
