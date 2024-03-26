import React, { SVGProps } from "react";

export function MoreHorizontal(props: SVGProps<SVGSVGElement>) {
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
        d="M6.25 10a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM15 11.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default MoreHorizontal;
