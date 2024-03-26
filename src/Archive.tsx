import React, { SVGProps } from "react";

export function Archive(props: SVGProps<SVGSVGElement>) {
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
        d="M8.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM2 4.75C2 3.784 2.784 3 3.75 3h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.832A1.75 1.75 0 0 1 2 6.25v-1.5ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75ZM4 8v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8H4Z"
      />
    </svg>
  );
}
export default Archive;
