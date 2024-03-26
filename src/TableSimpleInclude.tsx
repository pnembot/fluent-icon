import React, { SVGProps } from "react";

export function TableSimpleInclude(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v3.629c-.29-.24-.629-.42-1-.525V5.5A1.5 1.5 0 0 0 14.5 4h-4v4.604c-.371.105-.71.285-1 .525V4h-4A1.5 1.5 0 0 0 4 5.5v4h5.129c-.24.29-.42.629-.525 1H4v4A1.5 1.5 0 0 0 5.5 16h3.104c.105.371.285.71.525 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm6.5 5.75c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15.25 17h-4a1.75 1.75 0 0 1-1.75-1.75v-4Z"
      />
    </svg>
  );
}
export default TableSimpleInclude;
