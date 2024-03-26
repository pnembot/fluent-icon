import React, { SVGProps } from "react";

export function PresenceOffline(props: SVGProps<SVGSVGElement>) {
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
        d="M13.707 6.293a1 1 0 0 1 0 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10L6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 0ZM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10Zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"
      />
    </svg>
  );
}
export default PresenceOffline;
