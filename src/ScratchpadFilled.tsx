import React, { SVGProps } from "react";

export function ScratchpadFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18H12v-.707A5.502 5.502 0 0 1 8 12H6.5a.5.5 0 0 1 0-1h1.585A1.5 1.5 0 0 1 9.5 10v-.5h-3a.5.5 0 0 1 0-1h3A4 4 0 0 1 9.79 7H6.5a.5.5 0 0 1 0-1h3.877A3.999 3.999 0 0 1 17 6.562V3.5A1.5 1.5 0 0 0 15.5 2h-11Zm9 3.5a3 3 0 0 0-3 3v3a3 3 0 1 0 6 0v-3a3 3 0 0 0-3-3Zm-4 5.5a.5.5 0 0 1 .5.5v.5a3.5 3.5 0 1 0 7 0v-.5a.5.5 0 0 1 1 0v.5a4.5 4.5 0 0 1-4 4.473V18a.5.5 0 0 1-1 0v-1.527A4.5 4.5 0 0 1 9 12v-.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default ScratchpadFilled;
