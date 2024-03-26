import React, { SVGProps } from "react";

export function Pin(props: SVGProps<SVGSVGElement>) {
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
        d="M10.122 3.137a2 2 0 0 1 3.203-.52l4.057 4.057a2 2 0 0 1-.52 3.203l-3.458 1.73a1.5 1.5 0 0 0-.722.784l-1.436 3.59a1 1 0 0 1-1.636.336L7 13.707l-3.293 3.292H3v-.707L6.293 13l-2.61-2.61a1 1 0 0 1 .335-1.636l3.59-1.436a1.5 1.5 0 0 0 .785-.721l1.73-3.459Zm2.496.187a1 1 0 0 0-1.601.26l-1.73 3.459A2.5 2.5 0 0 1 7.98 8.246L4.39 9.682l5.927 5.928l1.436-3.59a2.5 2.5 0 0 1 1.204-1.308l3.458-1.73a1 1 0 0 0 .26-1.6l-4.057-4.058Z"
      />
    </svg>
  );
}
export default Pin;
