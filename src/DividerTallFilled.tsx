import React, { SVGProps } from "react";

export function DividerTallFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.75 1a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 9.75 1Z"
      />
    </svg>
  );
}
export default DividerTallFilled;
