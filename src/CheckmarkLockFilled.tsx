import React, { SVGProps } from "react";

export function CheckmarkLockFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a8 8 0 0 1 7.993 8.331A3 3 0 0 0 12.5 12v.063A2 2 0 0 0 11 14v3.938A8 8 0 1 1 10 2Zm3.358 5.646a.5.5 0 0 0-.637-.057l-.07.057L9 11.298L7.354 9.651l-.07-.058a.5.5 0 0 0-.695.696l.057.07l2 2l.07.057a.5.5 0 0 0 .568 0l.07-.058l4.004-4.004l.058-.07a.5.5 0 0 0-.058-.638ZM15.5 10a2 2 0 0 1 2 2v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1a2 2 0 0 1 2-2Zm-.655 6.366a.75.75 0 1 0 1.31-.732a.75.75 0 0 0-1.31.732ZM15.5 11a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}
export default CheckmarkLockFilled;
