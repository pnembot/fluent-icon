import React, { SVGProps } from "react";

export function OpenFolderFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6.25A3.25 3.25 0 0 1 6.25 3H14a3.25 3.25 0 0 1 3.25 3.25v2a.75.75 0 0 1-1.5 0v-2A1.75 1.75 0 0 0 14 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v7.5c0 .966.784 1.75 1.75 1.75h4a.75.75 0 0 1 0 1.5h-4A3.25 3.25 0 0 1 3 13.75v-7.5Zm5 2.5A.75.75 0 0 1 8.75 8h4.5a.75.75 0 0 1 0 1.5h-2.69l5.22 5.22a.75.75 0 1 1-1.06 1.06L9.5 10.56v2.69a.75.75 0 0 1-1.5 0v-4.5Z"
      />
    </svg>
  );
}
export default OpenFolderFilled;
