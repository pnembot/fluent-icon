import React, { SVGProps } from "react";

export function ShieldLock(props: SVGProps<SVGSVGElement>) {
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
        d="M9.723 2.084a.5.5 0 0 1 .554 0a15.05 15.05 0 0 0 6.294 2.421A.5.5 0 0 1 17 5v4.341a3.015 3.015 0 0 0-1-.94V5.428a15.969 15.969 0 0 1-5.6-2.082l-.4-.249l-.4.249A15.969 15.969 0 0 1 4 5.428V9.5c0 3.392 1.968 5.863 6 7.463V17c0 .342.086.663.237.945l-.057.022a.5.5 0 0 1-.36 0C5.308 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.495a15.05 15.05 0 0 0 6.293-2.421ZM12.5 12v-1a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5Zm1-1v1h2v-1a1 1 0 1 0-2 0Zm1.75 4a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"
      />
    </svg>
  );
}
export default ShieldLock;