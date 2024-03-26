import React, { SVGProps } from "react";

export function PaneOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M10.821 10.5H14.5a.5.5 0 0 0 0-1h-3.679l.999-.874a.5.5 0 1 0-.659-.752l-2 1.75a.5.5 0 0 0 0 .752l2 1.75a.5.5 0 1 0 .659-.752l-.999-.874z"
          fill="currentColor"
        />
        <path
          d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zM3 6a1 1 0 0 1 1-1h3v10H4a1 1 0 0 1-1-1V6zm5 9V5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default PaneOpen;
