import React, { SVGProps } from "react";

export function PauseCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M9 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5Zm3 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"
      />
    </svg>
  );
}
export default PauseCircle;
