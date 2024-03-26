import React, { SVGProps } from "react";

export function LockClosedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3Zm0 8.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM10 4a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}
export default LockClosedFilled;