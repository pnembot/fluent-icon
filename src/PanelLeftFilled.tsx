import React, { SVGProps } from "react";

export function PanelLeftFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm10 1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.5V4H15Z"
      />
    </svg>
  );
}
export default PanelLeftFilled;