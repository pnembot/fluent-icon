import React, { SVGProps } from "react";

export function ClassFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3v6.5a.5.5 0 0 1-.8.4L8.5 7.625L6.8 8.9a.5.5 0 0 1-.8-.4V2Zm4 0H7v5.5l1.2-.9a.5.5 0 0 1 .6 0l1.2.9V2Z"
      />
    </svg>
  );
}
export default ClassFilled;
