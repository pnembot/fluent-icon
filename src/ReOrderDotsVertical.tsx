import React, { SVGProps } from "react";

export function ReOrderDotsVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M7 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5-11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default ReOrderDotsVertical;
