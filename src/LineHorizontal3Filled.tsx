import React, { SVGProps } from "react";

export function LineHorizontal3Filled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Z"
      />
    </svg>
  );
}
export default LineHorizontal3Filled;