import React, { SVGProps } from "react";

export function SplitHorizontal(props: SVGProps<SVGSVGElement>) {
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
        d="M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1h15ZM16 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4h1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4h1V4Zm0 7h-1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4H4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4Z"
      />
    </svg>
  );
}
export default SplitHorizontal;