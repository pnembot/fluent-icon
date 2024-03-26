import React, { SVGProps } from "react";

export function TriangleDownFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18.762 4.931C19.475 3.605 18.509 2 16.998 2H3.007C1.496 2 .53 3.605 1.243 4.931L8.24 17.948c.754 1.403 2.773 1.403 3.527 0l6.996-13.017Z"
      />
    </svg>
  );
}
export default TriangleDownFilled;
