import React, { SVGProps } from "react";

export function DataTrendingFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 3.75a.75.75 0 0 0-1.5 0v10.5A2.75 2.75 0 0 0 5.75 17h10.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V3.75ZM12.75 5a.75.75 0 0 0 0 1.5h1.69L11 9.94L9.53 8.47a.75.75 0 0 0-1.06 0l-2.75 2.75a.75.75 0 1 0 1.06 1.06L9 10.06l1.47 1.47a.75.75 0 0 0 1.06 0l3.97-3.97v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5Z"
      />
    </svg>
  );
}
export default DataTrendingFilled;