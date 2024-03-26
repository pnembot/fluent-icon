import React, { SVGProps } from "react";

export function ArrowStepInRight(props: SVGProps<SVGSVGElement>) {
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
        d="M15 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm1 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM2 10a.5.5 0 0 1 .5-.5h7.793L7.146 6.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l3.147-3.146H2.5A.5.5 0 0 1 2 10Z"
      />
    </svg>
  );
}
export default ArrowStepInRight;
