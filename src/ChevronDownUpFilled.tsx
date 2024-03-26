import React, { SVGProps } from "react";

export function ChevronDownUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6.28 2.97a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 6.69L6.28 2.97Zm8.5 13l-4.25-4.25a.75.75 0 0 0-1.06 0l-4.25 4.25a.75.75 0 1 0 1.06 1.06L10 13.31l3.72 3.72a.75.75 0 1 0 1.06-1.06Z"
      />
    </svg>
  );
}
export default ChevronDownUpFilled;
