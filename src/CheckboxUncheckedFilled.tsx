import React, { SVGProps } from "react";

export function CheckboxUncheckedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-1.5A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h8a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 14 4.5H6Z"
      />
    </svg>
  );
}
export default CheckboxUncheckedFilled;
