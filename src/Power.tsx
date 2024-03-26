import React, { SVGProps } from "react";

export function Power(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6ZM13.743 4a.5.5 0 1 0-.499.867a6.5 6.5 0 1 1-6.494.004a.5.5 0 1 0-.5-.866A7.5 7.5 0 1 0 13.743 4Z"
      />
    </svg>
  );
}
export default Power;