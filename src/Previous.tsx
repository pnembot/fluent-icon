import React, { SVGProps } from "react";

export function Previous(props: SVGProps<SVGSVGElement>) {
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
        d="M3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13Zm14 .752c0-1-1.117-1.595-1.947-1.038l-8.5 5.707a1.25 1.25 0 0 0-.006 2.071l8.499 5.793A1.25 1.25 0 0 0 17 15.752v-11.5Zm-1.39-.207a.25.25 0 0 1 .39.207v11.5c0 .2-.225.32-.391.207l-8.5-5.793a.25.25 0 0 1 .002-.414l8.5-5.707Z"
      />
    </svg>
  );
}
export default Previous;
