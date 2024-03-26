import React, { SVGProps } from "react";

export function CursorClick(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM3.61 3.61a.5.5 0 0 1 .708 0l1.414 1.415a.5.5 0 1 1-.707.707L3.611 4.318a.5.5 0 0 1 0-.707Zm7.78 0a.5.5 0 0 1 0 .708L9.974 5.732a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0ZM2 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6.64-.2A1 1 0 0 0 7 8.067v9.101c0 .924 1.145 1.354 1.753.659l2.026-2.316A1.5 1.5 0 0 1 11.908 15h3.211c.935 0 1.359-1.17.64-1.768L8.64 7.299ZM8 17.17V8.067L15.119 14h-3.211a2.5 2.5 0 0 0-1.882.854L8 17.169Z"
      />
    </svg>
  );
}
export default CursorClick;
