import React, { SVGProps } from "react";

export function ToggleMultiple(props: SVGProps<SVGSVGElement>) {
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
        d="M8 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-5 0A3.5 3.5 0 0 0 6.5 9h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 5.5ZM6.5 3h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Zm7 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM3 14.5A3.5 3.5 0 0 0 6.5 18h7a3.5 3.5 0 1 0 0-7h-7A3.5 3.5 0 0 0 3 14.5ZM6.5 12h7a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5Z"
      />
    </svg>
  );
}
export default ToggleMultiple;
