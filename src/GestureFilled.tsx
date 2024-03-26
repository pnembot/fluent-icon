import React, { SVGProps } from "react";

export function GestureFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM3.5 16.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM5.75 4a.75.75 0 0 0-.309 1.433l9.064 4.1l-9.59 4.796a.75.75 0 1 0 .67 1.342l11-5.5a.75.75 0 0 0-.026-1.354L9.228 5.5h5.522a.75.75 0 0 0 0-1.5H5.751Z"
      />
    </svg>
  );
}
export default GestureFilled;
