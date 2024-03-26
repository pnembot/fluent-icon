import React, { SVGProps } from "react";

export function FullScreenMaximize(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5a2 2 0 0 1 2-2h2a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v2a.5.5 0 0 1-1 0V5Zm9.5-1.5A.5.5 0 0 1 13 3h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1h-2a.5.5 0 0 1-.5-.5Zm-9 9a.5.5 0 0 1 .5.5v2a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2v-2a.5.5 0 0 1 .5-.5Zm13 0a.5.5 0 0 1 .5.5v2a2 2 0 0 1-2 2h-2a.5.5 0 0 1 0-1h2a1 1 0 0 0 1-1v-2a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default FullScreenMaximize;
