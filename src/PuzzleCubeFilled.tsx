import React, { SVGProps } from "react";

export function PuzzleCubeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-1-1V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4Z"
      />
    </svg>
  );
}
export default PuzzleCubeFilled;
