import React, { SVGProps } from "react";

export function NewFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 2.75a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75ZM5.97 5.97a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06ZM3.5 14.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"
      />
    </svg>
  );
}
export default NewFilled;
