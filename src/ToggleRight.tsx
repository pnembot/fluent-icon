import React, { SVGProps } from "react";

export function ToggleRight(props: SVGProps<SVGSVGElement>) {
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
        d="M14 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM2 10a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4Zm4-3a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6H6Z"
      />
    </svg>
  );
}
export default ToggleRight;
