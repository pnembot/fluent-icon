import React, { SVGProps } from "react";

export function DataTreemapFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1V3Zm1 14h6a3 3 0 0 0 3-3v-1H8v4Zm9-5V6a3 3 0 0 0-3-3H8v9h9Z"
      />
    </svg>
  );
}
export default DataTreemapFilled;
