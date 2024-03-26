import React, { SVGProps } from "react";

export function ExpandUpLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M16 6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.5a.5.5 0 0 1 1 0V14a2 2 0 0 0 2 2h4v-4a2 2 0 0 1 2-2h4V6Zm-4 5a1 1 0 0 0-1 1v4h3a2 2 0 0 0 2-2v-3h-4ZM9 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.707l4.146 4.147a.5.5 0 1 0 .708-.708L4.707 4H8.5a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default ExpandUpLeft;