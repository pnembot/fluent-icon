import React, { SVGProps } from "react";

export function DocumentProhibited(props: SVGProps<SVGSVGElement>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H9.743c.253-.307.474-.642.657-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.022a5.48 5.48 0 0 0-1 .185V4Zm7-.793V6.5a.5.5 0 0 0 .5.5h3.293L11 3.207ZM8.682 17.682a4.5 4.5 0 1 1-6.364-6.364a4.5 4.5 0 0 1 6.364 6.364Zm-5.278-.379a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Zm-.707-.707l4.9-4.9a3.5 3.5 0 0 0-4.9 4.9Z"
      />
    </svg>
  );
}
export default DocumentProhibited;