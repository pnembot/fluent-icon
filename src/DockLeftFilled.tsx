import React, { SVGProps } from "react";

export function DockLeftFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M16 4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1H8v10h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
        fill="currentColor"
        fill-rule="nonzero"
      />
    </svg>
  );
}
export default DockLeftFilled;