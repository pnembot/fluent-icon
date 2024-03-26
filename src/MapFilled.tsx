import React, { SVGProps } from "react";

export function MapFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m12 6.04l-4-2.8v10.72l4 2.8V6.04Zm1 10.72l4.787-3.35A.5.5 0 0 0 18 13V3.5a.5.5 0 0 0-.787-.41L13 6.04v10.72ZM2.213 6.59L7 3.24v10.72l-4.213 2.95A.5.5 0 0 1 2 16.5V7a.5.5 0 0 1 .213-.41Z"
      />
    </svg>
  );
}
export default MapFilled;
