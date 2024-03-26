import React, { SVGProps } from "react";

export function DrawerSubtract(props: SVGProps<SVGSVGElement>) {
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
        d="M18 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2 0a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5Zm1 4.243a5.507 5.507 0 0 1-1 .657v.6h-3.5a.5.5 0 0 0-.5.5a2 2 0 1 1-4 0a.5.5 0 0 0-.5-.5H4V8h4.6a5.463 5.463 0 0 1-.393-1H4a2 2 0 0 1 2-2h2.022a5.48 5.48 0 0 1 .185-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.743ZM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.041a3 3 0 0 0 5.918 0H16v3Z"
      />
    </svg>
  );
}
export default DrawerSubtract;
