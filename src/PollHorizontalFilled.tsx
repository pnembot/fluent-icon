import React, { SVGProps } from "react";

export function PollHorizontalFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18 10a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h12a2 2 0 0 0 2-2Zm-8-6a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2Zm4 12a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h8a2 2 0 0 0 2-2Z"
      />
    </svg>
  );
}
export default PollHorizontalFilled;
