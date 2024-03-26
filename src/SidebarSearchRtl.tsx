import React, { SVGProps } from "react";

export function SidebarSearchRtl(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v7a4.481 4.481 0 0 0-1-2.829V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h4.171c.773.625 1.757 1 2.829 1h-7A2.5 2.5 0 0 1 3 14.5v-9Zm3 1a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Zm10 6c0 .786-.26 1.512-.697 2.096l2.55 2.55a.5.5 0 0 1-.707.708l-2.55-2.55A3.5 3.5 0 1 1 16 12.5Zm-1 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0Z"
      />
    </svg>
  );
}
export default SidebarSearchRtl;
