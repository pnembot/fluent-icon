import React, { SVGProps } from "react";

export function DataBarHorizontalFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4 2a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4H4Zm0 6a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4H4Zm0 6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z"
      />
    </svg>
  );
}
export default DataBarHorizontalFilled;
