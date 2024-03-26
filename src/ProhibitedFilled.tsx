import React, { SVGProps } from "react";

export function ProhibitedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-1.5 0a6.473 6.473 0 0 0-1.404-4.035l-9.131 9.131A6.5 6.5 0 0 0 16.5 10ZM4.904 14.035l9.131-9.131a6.5 6.5 0 0 0-9.131 9.131Z"
      />
    </svg>
  );
}
export default ProhibitedFilled;
