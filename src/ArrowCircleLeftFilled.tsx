import React, { SVGProps } from "react";

export function ArrowCircleLeftFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm-.854-4.646a.5.5 0 0 0 .708-.708L7.707 10.5H13.5a.5.5 0 0 0 0-1H7.707l2.147-2.146a.5.5 0 0 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3Z"
      />
    </svg>
  );
}
export default ArrowCircleLeftFilled;
