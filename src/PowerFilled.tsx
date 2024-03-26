import React, { SVGProps } from "react";

export function PowerFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.75 2.5a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6ZM13.743 4a.75.75 0 1 0-.748 1.3A6 6 0 1 1 7 5.305a.75.75 0 1 0-.75-1.3a7.5 7.5 0 1 0 7.493-.003Z"
      />
    </svg>
  );
}
export default PowerFilled;
