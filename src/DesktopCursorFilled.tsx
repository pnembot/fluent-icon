import React, { SVGProps } from "react";

export function DesktopCursorFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v10A1.5 1.5 0 0 0 3.5 15H7v2H5.5a.5.5 0 0 0 0 1H11l.001-1H8v-2h3.002l.003-4.5a1.5 1.5 0 0 1 2.556-1.066l4.408 4.37c.02-.099.031-.2.031-.304v-10A1.5 1.5 0 0 0 16.5 2h-13Zm9.357 8.145a.5.5 0 0 0-.852.355L12 18.498a.5.5 0 0 0 .9.301l1.995-2.646l3.496.776a.5.5 0 0 0 .46-.844l-5.994-5.94Z"
      />
    </svg>
  );
}
export default DesktopCursorFilled;
