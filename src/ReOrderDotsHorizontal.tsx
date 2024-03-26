import React, { SVGProps } from "react";

export function ReOrderDotsHorizontal(props: SVGProps<SVGSVGElement>) {
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
        d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0ZM9 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0ZM4 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm11 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm-5 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-7-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default ReOrderDotsHorizontal;
