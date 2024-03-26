import React, { SVGProps } from "react";

export function WindowHeaderVerticalFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm4 10h7.5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H7v11Z"
      />
    </svg>
  );
}
export default WindowHeaderVerticalFilled;
