import React, { SVGProps } from "react";

export function DocumentUnknown(props: SVGProps<SVGSVGElement>) {
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
          d="M6 2a2 2 0 0 0-2 2v5.207a5.48 5.48 0 0 1 1-.185V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3.6a5.507 5.507 0 0 1-.657 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7z"
          fill="currentColor"
        />
        <path
          d="M10 14.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0zm-4.5 1.88a.625.625 0 1 1 0 1.25a.625.625 0 0 1 0-1.25zm0-4.877c1.031 0 1.853.846 1.853 1.95c0 .586-.214.908-.727 1.319l-.277.214c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 5 15.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544c0-.558-.382-.95-.854-.95c-.494 0-.859.366-.853.945a.5.5 0 1 1-1 .01c-.011-1.137.805-1.955 1.853-1.955z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default DocumentUnknown;
