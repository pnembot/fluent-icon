import React, { SVGProps } from "react";

export function Briefcase(props: SVGProps<SVGSVGElement>) {
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
        d="M7 5V3.75C7 2.784 7.784 2 8.75 2h2.5c.966 0 1.75.784 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 13.5v-6A2.5 2.5 0 0 1 5.5 5H7Zm1-1.25V5h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75ZM5.5 6A1.5 1.5 0 0 0 4 7.5v1A1.5 1.5 0 0 0 5.5 10H9v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5h3.5A1.5 1.5 0 0 0 16 8.5v-1A1.5 1.5 0 0 0 14.5 6h-9Zm9 5H11v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V11H5.5a2.49 2.49 0 0 1-1.5-.5v3A1.5 1.5 0 0 0 5.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-3a2.49 2.49 0 0 1-1.5.5Z"
      />
    </svg>
  );
}
export default Briefcase;