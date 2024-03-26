import React, { SVGProps } from "react";

export function Subtract(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <rect width="14" height="1" x="3" y="9.5" fill="currentColor" rx=".5" />
    </svg>
  );
}
export default Subtract;
