import React, { SVGProps } from "react";

export function ChevronUpDownFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.53 2.72a.75.75 0 0 0-1.06 0L5.22 6.97a.75.75 0 0 0 1.06 1.06L10 4.31l3.72 3.72a.75.75 0 1 0 1.06-1.06l-4.25-4.25Zm4.25 10.31l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 15.69l3.72-3.72a.75.75 0 1 1 1.06 1.06Z"
      />
    </svg>
  );
}
export default ChevronUpDownFilled;