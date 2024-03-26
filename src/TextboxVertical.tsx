import React, { SVGProps } from "react";

export function TextboxVertical(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          fill="currentColor"
        />
        <path
          d="M10 6.5a.5.5 0 1 0-1 0v4a.5.5 0 0 0 1 0v-4z"
          fill="currentColor"
        />
        <path
          d="M7 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          fill="currentColor"
        />
        <path
          d="M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9zm-1 0v-9A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextboxVertical;
