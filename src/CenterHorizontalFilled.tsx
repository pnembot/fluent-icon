import React, { SVGProps } from "react";

export function CenterHorizontalFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 18a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5Zm12.5-.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0v15ZM9 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9Z"
      />
    </svg>
  );
}
export default CenterHorizontalFilled;
