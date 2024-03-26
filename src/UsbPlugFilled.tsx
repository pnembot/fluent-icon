import React, { SVGProps } from "react";

export function UsbPlugFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V6h.079C14.137 6 15 6.853 15 7.912v5.176A1.916 1.916 0 0 1 13.079 15H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.921A1.916 1.916 0 0 1 5 13.088V7.912C5 6.852 5.863 6 6.921 6H7V2.5ZM8 6h4V3H8v3Z"
      />
    </svg>
  );
}
export default UsbPlugFilled;
