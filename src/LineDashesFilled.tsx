import React, { SVGProps } from "react";

export function LineDashesFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.78 4.28a.75.75 0 0 0-1.06-1.06l-.5.5a.75.75 0 0 0 1.06 1.06l.5-.5Zm-3 1.94a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0Zm-3 3a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 1 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0Zm-3 3a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 0 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 0Zm-3 4.06a.75.75 0 1 0-1.06-1.06l-.5.5a.75.75 0 1 0 1.06 1.06l.5-.5Z"
      />
    </svg>
  );
}
export default LineDashesFilled;
