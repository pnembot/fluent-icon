import React, { SVGProps } from "react";

export function PageFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V9h-4.5A1.5 1.5 0 0 1 11 7.5V3H5.5z"
          fill="currentColor"
        />
        <path
          d="M12 3.144V7.5a.5.5 0 0 0 .5.5h4.356a2.5 2.5 0 0 0-.588-.932l-3.336-3.336A2.5 2.5 0 0 0 12 3.144z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default PageFilled;
