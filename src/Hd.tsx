import React, { SVGProps } from "react";

export function Hd(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 7a.5.5 0 0 1 .5.5V10h2.5V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5ZM11 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1.417A2.583 2.583 0 0 0 15 10.417v-.834A2.583 2.583 0 0 0 12.417 7H11Zm1.417 5H11.5V8h.917C13.29 8 14 8.709 14 9.583v.834C14 11.29 13.291 12 12.417 12ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z"
      />
    </svg>
  );
}
export default Hd;