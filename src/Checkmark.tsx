import React, { SVGProps } from "react";

export function Checkmark(props: SVGProps<SVGSVGElement>) {
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
        d="M3.374 10.168a.5.5 0 0 0-.748.664l4 4.5a.5.5 0 0 0 .728.022l10.5-10.5a.5.5 0 0 0-.707-.708L7.02 14.271l-3.647-4.103Z"
      />
    </svg>
  );
}
export default Checkmark;
