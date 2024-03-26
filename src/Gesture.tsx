import React, { SVGProps } from "react";

export function Gesture(props: SVGProps<SVGSVGElement>) {
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
        d="M5.011 4.394A.5.5 0 0 1 5.5 4h9a.5.5 0 0 1 0 1H7.808l8.899 4.045a.5.5 0 0 1 .03.895l-11 5.923a.5.5 0 1 1-.474-.88l10.112-5.445L5.293 4.955a.5.5 0 0 1-.282-.56ZM17 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM3.5 17a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
      />
    </svg>
  );
}
export default Gesture;
