import React, { SVGProps } from "react";

export function TriangleRightFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.931 1.24C3.605.525 2 1.491 2 3.002v13.991c0 1.512 1.605 2.477 2.931 1.764l13.017-6.996c1.403-.754 1.403-2.773 0-3.527L4.931 1.24Z"
      />
    </svg>
  );
}
export default TriangleRightFilled;
