import React, { SVGProps } from "react";

export function Scratchpad(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18H12v-.707a5.463 5.463 0 0 1-.794-.293H4.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1.877a4.02 4.02 0 0 1 1 1.185V3.5A1.5 1.5 0 0 0 15.5 2h-11ZM8 11.5c0-.175.03-.344.085-.5H6.5a.5.5 0 0 0 0 1H8v-.5Zm-1.5-3h3v1h-3a.5.5 0 0 1 0-1ZM9.79 7c.148-.363.346-.7.587-1H6.5a.5.5 0 0 0 0 1h3.29Zm3.71-1.5a3 3 0 0 0-3 3v3a3 3 0 1 0 6 0v-3a3 3 0 0 0-3-3Zm-2 3a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0v-3Zm-1.5 3a.5.5 0 0 0-1 0v.5a4.5 4.5 0 0 0 4 4.473V18a.5.5 0 0 0 1 0v-1.527A4.5 4.5 0 0 0 18 12v-.5a.5.5 0 0 0-1 0v.5a3.5 3.5 0 1 1-7 0v-.5Z"
      />
    </svg>
  );
}
export default Scratchpad;
