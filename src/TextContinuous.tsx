import React, { SVGProps } from "react";

export function TextContinuous(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 9a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm1.354-6.354a.5.5 0 1 0-.708.708L3.793 10l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5ZM7.5 8h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1Zm0 3a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z"
      />
    </svg>
  );
}
export default TextContinuous;