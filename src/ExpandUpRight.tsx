import React, { SVGProps } from "react";

export function ExpandUpRight(props: SVGProps<SVGSVGElement>) {
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
        d="M4 6a2 2 0 0 1 2-2h2.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-4v-4a2 2 0 0 0-2-2H4V6Zm0 5h4a1 1 0 0 1 1 1v4H6a2 2 0 0 1-2-2v-3Zm7-7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.707l-4.146 4.147a.5.5 0 0 1-.708-.708L15.293 4H11.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ExpandUpRight;
