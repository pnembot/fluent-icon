import React, { SVGProps } from "react";

export function CursorProhibitedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 5.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.485 3.485 0 0 1 11 5.5ZM14.5 9c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 9Zm0 2a5.5 5.5 0 0 1-5.377-6.664L6.636 2.288A1 1 0 0 0 5 3.06v13.998c0 .926 1.15 1.355 1.756.655l3.524-4.073a1.5 1.5 0 0 1 1.134-.518h5.592c.938 0 1.36-1.176.636-1.772l-.967-.797A5.482 5.482 0 0 1 14.5 11Z"
      />
    </svg>
  );
}
export default CursorProhibitedFilled;