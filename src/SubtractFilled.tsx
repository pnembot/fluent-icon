import React, { SVGProps } from "react";

export function SubtractFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <rect
        width="14"
        height="1.5"
        x="3"
        y="9.25"
        fill="currentColor"
        rx=".75"
      />
    </svg>
  );
}
export default SubtractFilled;
