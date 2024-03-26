import React, { SVGProps } from "react";

export function ArrowUndo(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2.5a.5.5 0 0 0-1 0v4.9a.6.6 0 0 0 .6.6h4.9a.5.5 0 0 0 0-1H5.906l3.473-3.019a4 4 0 0 1 5.248 6.038l-8.172 7.104a.5.5 0 0 0 .656.754l8.172-7.103a5 5 0 0 0-6.56-7.547L5 6.463V2.5Z"
      />
    </svg>
  );
}
export default ArrowUndo;