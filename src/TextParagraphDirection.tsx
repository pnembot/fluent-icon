import React, { SVGProps } from "react";

export function TextParagraphDirection(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1h-5ZM13 4v6h-1.5a3 3 0 0 1 0-6H13ZM3.146 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.793 8L3.146 6.354a.5.5 0 0 1 0-.708Zm2.708 6a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L4.207 14l1.647-1.646a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default TextParagraphDirection;