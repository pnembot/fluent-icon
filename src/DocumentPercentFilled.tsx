import React, { SVGProps } from "react";

export function DocumentPercentFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.67a3.002 3.002 0 0 1 1.998 2.711l1.441-1.442a1.5 1.5 0 0 1 2.122 2.122l-1.442 1.441A3 3 0 0 1 10.829 18H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5ZM5 12a2 2 0 1 1-4 0a2 2 0 1 1 4 0Zm-1 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-1.146 5.854a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708l-6 6ZM6 17a2 2 0 1 0 3.998.002A2 2 0 0 0 6 17Zm2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm3-11.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentPercentFilled;