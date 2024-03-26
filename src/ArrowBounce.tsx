import React, { SVGProps } from "react";

export function ArrowBounce(props: SVGProps<SVGSVGElement>) {
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
        d="M2.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0V7.707l7.146 7.147a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L10.5 13.793L3.707 7H9.5a.5.5 0 0 0 0-1h-7Z"
      />
    </svg>
  );
}
export default ArrowBounce;
