import React, { SVGProps } from "react";

export function TextQuote(props: SVGProps<SVGSVGElement>) {
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
        d="M7.826 8.62a8.802 8.802 0 0 1-.952 2.764c-.649 1.18-1.476 2.011-2.228 2.762a.5.5 0 0 0 .708.708l.011-.012c.747-.747 1.664-1.664 2.386-2.976C8.48 10.538 9 8.83 9 6.5a2.5 2.5 0 1 0-1.174 2.12ZM8 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm6.826 2.12a8.8 8.8 0 0 1-.952 2.764c-.649 1.18-1.476 2.011-2.228 2.762a.5.5 0 0 0 .708.708l.012-.012c.746-.747 1.663-1.664 2.385-2.976C15.48 10.538 16 8.83 16 6.5a2.5 2.5 0 1 0-1.174 2.12ZM13.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
export default TextQuote;
