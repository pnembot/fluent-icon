import React, { SVGProps } from "react";

export function ImportantFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a3 3 0 0 0-3 3c0 2.227.789 5.204 1.225 6.685A1.842 1.842 0 0 0 10 13c.81 0 1.54-.518 1.775-1.31C12.212 10.213 13 7.25 13 5a3 3 0 0 0-3-3Zm0 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"
      />
    </svg>
  );
}
export default ImportantFilled;
