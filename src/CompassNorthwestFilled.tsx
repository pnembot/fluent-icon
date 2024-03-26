import React, { SVGProps } from "react";

export function CompassNorthwestFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm.51-10.127a3 3 0 0 1 1.647 1.605l1.6 3.731a.417.417 0 0 1-.548.548l-3.731-1.6a3 3 0 0 1-1.606-1.647L6.484 7.025a.417.417 0 0 1 .54-.541l3.486 1.389Z"
      />
    </svg>
  );
}
export default CompassNorthwestFilled;
