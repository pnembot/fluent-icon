import React, { SVGProps } from "react";

export function SkipForwardTab(props: SVGProps<SVGSVGElement>) {
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
        d="M2.89 7.812c1.135-1.42 3.044-3.147 5.404-3.66c2.113-.46 4.697.031 7.545 2.848H12.5a.5.5 0 0 0 0 1H17a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v2.748c-3.027-2.972-5.923-3.616-8.419-3.074C5.4 3.758 3.31 5.686 2.11 7.19a.5.5 0 0 0 .782.623ZM6.5 11A1.5 1.5 0 0 0 5 12.5v3A1.5 1.5 0 0 0 6.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-7ZM6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3Z"
      />
    </svg>
  );
}
export default SkipForwardTab;