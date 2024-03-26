import React, { SVGProps } from "react";

export function ChevronDoubleRight(props: SVGProps<SVGSVGElement>) {
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
        d="M8.646 4.147a.5.5 0 0 1 .707-.001l5.484 5.465a.55.55 0 0 1 0 .779l-5.484 5.465a.5.5 0 0 1-.706-.708L13.812 10L8.647 4.854a.5.5 0 0 1-.001-.707Zm-4 0a.5.5 0 0 1 .707-.001l5.484 5.465a.55.55 0 0 1 0 .779l-5.484 5.465a.5.5 0 0 1-.706-.708L9.812 10L4.647 4.854a.5.5 0 0 1-.001-.707Z"
      />
    </svg>
  );
}
export default ChevronDoubleRight;
