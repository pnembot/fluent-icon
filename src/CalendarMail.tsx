import React, { SVGProps } from "react";

export function CalendarMail(props: SVGProps<SVGSVGElement>) {
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
        d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-1V6H3v5.5A1.5 1.5 0 0 0 4.5 13H5v1h-.5A2.5 2.5 0 0 1 2 11.5v-7Zm11 0A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5V5h10v-.5ZM8 9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H8Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.022l-5 2.94l-5-2.94V11Zm0 1.182l4.62 2.716a.75.75 0 0 0 .76 0L17 12.182V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3.818Z"
      />
    </svg>
  );
}
export default CalendarMail;
