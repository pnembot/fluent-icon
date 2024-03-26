import React, { SVGProps } from "react";

export function BranchFork(props: SVGProps<SVGSVGElement>) {
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
        d="M9 5a3 3 0 1 0-3.5 2.959v4.082a3 3 0 1 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.541a3 3 0 1 0-1 0V8.5A1.5 1.5 0 0 1 12 10H6.5V7.959A3 3 0 0 0 9 5ZM6 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM16 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
export default BranchFork;
