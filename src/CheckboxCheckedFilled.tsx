import React, { SVGProps } from "react";

export function CheckboxCheckedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L8.5 11.793l4.646-4.647a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default CheckboxCheckedFilled;