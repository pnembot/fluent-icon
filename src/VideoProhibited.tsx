import React, { SVGProps } from "react";

export function VideoProhibited(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6.5A2.5 2.5 0 0 1 4.5 4h7A2.5 2.5 0 0 1 14 6.5v1l2.4-1.8a1 1 0 0 1 1.6.8v3.757a5.503 5.503 0 0 0-1-.657V6.5l-3 2.25v.272a5.48 5.48 0 0 0-1 .185V6.5A1.5 1.5 0 0 0 11.5 5h-7A1.5 1.5 0 0 0 3 6.5v7A1.5 1.5 0 0 0 4.5 15h4.522a5.5 5.5 0 0 0 .185 1H4.5A2.5 2.5 0 0 1 2 13.5v-7Zm8 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.707-.707a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z"
      />
    </svg>
  );
}
export default VideoProhibited;
