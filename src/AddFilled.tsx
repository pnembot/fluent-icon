import React, { SVGProps } from "react";

export function AddFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75Z"
      />
    </svg>
  );
}
export default AddFilled;