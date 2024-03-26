import React, { SVGProps } from "react";

export function Attach(props: SVGProps<SVGSVGElement>) {
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
        d="m4.828 10.485l5.657-5.657a3 3 0 0 1 4.243 4.243L8.01 15.788a1.5 1.5 0 0 1-2.121-2.121l6.01-6.01a.5.5 0 1 0-.707-.708l-6.01 6.01a2.5 2.5 0 0 0 3.535 3.536l6.718-6.717A4 4 0 1 0 9.778 4.12L4.12 9.778a.5.5 0 0 0 .707.707Z"
      />
    </svg>
  );
}
export default Attach;
