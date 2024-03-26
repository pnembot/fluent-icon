import React, { SVGProps } from "react";

export function DrawerAdd(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V5h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V6h-1.5a.5.5 0 0 1 0-1H13V3.5a.5.5 0 0 1 .5-.5ZM17 9.743V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.207a5.48 5.48 0 0 0-.185 1H6a2 2 0 0 0-2 2h4.207c.099.349.23.683.393 1H4v3h3.5a.5.5 0 0 1 .5.5a2 2 0 1 0 4 0a.5.5 0 0 1 .5-.5H16v-.6a5.507 5.507 0 0 0 1-.657ZM14 17a2 2 0 0 0 2-2v-3h-3.041a3 3 0 0 1-5.918 0H4v3a2 2 0 0 0 2 2h8Z"
      />
    </svg>
  );
}
export default DrawerAdd;