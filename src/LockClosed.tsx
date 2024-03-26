import React, { SVGProps } from "react";

export function LockClosed(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3Zm4 5H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm-4 3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM10 3a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
}
export default LockClosed;
