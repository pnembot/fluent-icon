import React, { SVGProps } from "react";

export function AttachText(props: SVGProps<SVGSVGElement>) {
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
        d="M6.5 4A2.5 2.5 0 0 0 4 6.5V14a.5.5 0 0 1-1 0V6.5a3.5 3.5 0 1 1 7 0v8.503A2 2 0 0 1 6 15V6.5a.5.5 0 0 1 1 0V15a1 1 0 1 0 2 0V6.5A2.5 2.5 0 0 0 6.5 4ZM12 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-.5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
      />
    </svg>
  );
}
export default AttachText;