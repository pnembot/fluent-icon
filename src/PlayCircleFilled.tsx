import React, { SVGProps } from "react";

export function PlayCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm6-2.167v4.334a.75.75 0 0 0 1.125.65l4.125-2.384a.5.5 0 0 0 0-.866L9.125 7.184A.75.75 0 0 0 8 7.834Z"
      />
    </svg>
  );
}
export default PlayCircleFilled;
