import React, { SVGProps } from "react";

export function BranchRequest(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0V7.96ZM5 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm2 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4.146-8.146a.5.5 0 0 0 .708-.708L10.707 5H12.5A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2ZM17 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
export default BranchRequest;