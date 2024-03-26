import React, { SVGProps } from "react";

export function Microscope(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 .5.5v1.53a.501.501 0 0 1 .11-.001A6.5 6.5 0 0 1 13.965 17H16.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h7A5.5 5.5 0 0 0 11 6.022V11.5a.5.5 0 0 1-.5.5H10v.5a1.5 1.5 0 0 1-3 0V12h-.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H7v-.5ZM8 12v.5a.5.5 0 0 0 1 0V12H8Zm-1-1h3V4H7v7Zm-1.5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"
      />
    </svg>
  );
}
export default Microscope;
