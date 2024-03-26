import React, { SVGProps } from "react";

export function DualScreenGroupFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V4Z"
      />
    </svg>
  );
}
export default DualScreenGroupFilled;
