import React, { SVGProps } from "react";

export function OvenFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v1h14V6a3 3 0 0 0-3-3H6Zm1.5 2.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-4 .75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5ZM3 14V8h14v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm3.5-4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7Z"
      />
    </svg>
  );
}
export default OvenFilled;
