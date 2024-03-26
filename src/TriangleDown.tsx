import React, { SVGProps } from "react";

export function TriangleDown(props: SVGProps<SVGSVGElement>) {
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
        d="M17.88 4.462a.996.996 0 0 0-.882-1.466H3.007a.996.996 0 0 0-.882 1.466l6.996 13.016a1.002 1.002 0 0 0 1.763 0L17.88 4.462ZM16.998 2c1.511 0 2.477 1.605 1.764 2.931l-6.996 13.017c-.754 1.403-2.773 1.403-3.527 0L1.243 4.931C.53 3.605 1.496 2 3.007 2h13.991Z"
      />
    </svg>
  );
}
export default TriangleDown;
