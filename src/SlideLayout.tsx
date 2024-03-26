import React, { SVGProps } from "react";

export function SlideLayout(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 14A1.5 1.5 0 0 1 4 12.5v-5A1.5 1.5 0 0 1 5.5 6h9A1.5 1.5 0 0 1 16 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-9Zm0-7a.5.5 0 0 0-.5.5V9h10V7.5a.5.5 0 0 0-.5-.5h-9ZM7 10H5v2.5a.5.5 0 0 0 .5.5H7v-3Zm1 3h6.5a.5.5 0 0 0 .5-.5V10H8v3ZM2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-7ZM4.5 5A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 5h-11Z"
      />
    </svg>
  );
}
export default SlideLayout;
