import React, { SVGProps } from "react";

export function PollFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2Zm-6 8a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Zm12-4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
}
export default PollFilled;
