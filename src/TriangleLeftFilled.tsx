import React, { SVGProps } from "react";

export function TriangleLeftFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.069 18.76c1.326.714 2.931-.252 2.931-1.763V3.006c0-1.511-1.605-2.477-2.931-1.764L2.052 8.238c-1.403.754-1.403 2.773 0 3.527l13.017 6.996Z"
      />
    </svg>
  );
}
export default TriangleLeftFilled;
